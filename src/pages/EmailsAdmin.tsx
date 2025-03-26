
import React, { useState, useEffect } from "react";
import { getEmails, clearEmails } from "@/utils/emailStorage";
import { Button } from "@/components/ui/button";

const EmailsAdmin = () => {
  const [emails, setEmails] = useState<string[]>([]);
  
  useEffect(() => {
    // Load emails when the component mounts
    loadEmails();
  }, []);
  
  const loadEmails = () => {
    const storedEmails = getEmails();
    setEmails(storedEmails);
  };
  
  const handleClearEmails = () => {
    if (window.confirm("Are you sure you want to clear all stored emails?")) {
      clearEmails();
      setEmails([]);
    }
  };
  
  const handleCopyEmails = () => {
    const emailsText = emails.join('\n');
    navigator.clipboard.writeText(emailsText)
      .then(() => {
        alert("Emails copied to clipboard!");
      })
      .catch(err => {
        console.error("Could not copy emails: ", err);
      });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Stored Emails</h1>
          <div className="space-x-2">
            <Button 
              onClick={handleCopyEmails} 
              variant="outline"
              disabled={emails.length === 0}
            >
              Copy All
            </Button>
            <Button 
              onClick={handleClearEmails} 
              variant="destructive"
              disabled={emails.length === 0}
            >
              Clear All
            </Button>
          </div>
        </div>
        
        {emails.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No emails stored yet.
          </div>
        ) : (
          <div className="border rounded-md">
            <ul className="divide-y">
              {emails.map((email, index) => (
                <li key={index} className="px-4 py-3 flex items-center">
                  <span className="mr-2 text-gray-400">{index + 1}.</span>
                  <span>{email}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <p className="mt-4 text-sm text-gray-500">
          Total emails: {emails.length}
        </p>
      </div>
    </div>
  );
};

export default EmailsAdmin;
