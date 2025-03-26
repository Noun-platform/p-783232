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
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="h-12 px-8 rounded-full bg-[#F7D83D] text-black font-medium hover:bg-[#F7D83D]/90 w-auto min-w-[200px]"
        >
          {isSubmitting ? 'Submitting...' : buttonText}
        </Button>
      </form>
    </Form>
  );
};

export default EmailCaptureForm;
