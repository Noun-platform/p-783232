import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

interface EmailCaptureFormProps {
  onSubmit: (email: string) => void;
  buttonText?: string;
}

const EmailCaptureForm = ({ onSubmit, buttonText = 'Get Started' }: EmailCaptureFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      onSubmit(values.email);
      form.reset();
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col items-center space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full max-w-md">
              <FormControl>
                <Input 
                  placeholder="Enter your email" 
                  className="h-12 border border-gray-200 rounded-full px-6 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button 
          type="submit" 
          className="w-[170px] bg-[#FCF890] py-2 px-4 h-[50px] rounded-full 
                text-[#000000] text-center text-[18px] font-thin 
                leading-normal tracking-[0.96px] capitalize 
                antialiased"
          disabled={isSubmitting}
            
        >
          {isSubmitting ? 'Submitting...' : buttonText}
        </button>
      </form>
    </Form>
  );
};

export default EmailCaptureForm;
