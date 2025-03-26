
/**
 * Simple utility to store email addresses in the browser's localStorage
 * This is a temporary solution before implementing a proper backend
 */

// Key used for localStorage
const EMAIL_STORAGE_KEY = 'stored_emails';

/**
 * Save an email to localStorage
 */
export const saveEmail = (email: string): void => {
  try {
    // Get existing emails
    const existingEmails = getEmails();
    
    // Add new email if it doesn't already exist
    if (!existingEmails.includes(email)) {
      existingEmails.push(email);
      
      // Save updated list
      localStorage.setItem(EMAIL_STORAGE_KEY, JSON.stringify(existingEmails));
      console.log(`Email saved: ${email}`);
    } else {
      console.log(`Email already exists: ${email}`);
    }
  } catch (error) {
    console.error('Error saving email:', error);
  }
};

/**
 * Get all stored emails
 */
export const getEmails = (): string[] => {
  try {
    const storedEmails = localStorage.getItem(EMAIL_STORAGE_KEY);
    return storedEmails ? JSON.parse(storedEmails) : [];
  } catch (error) {
    console.error('Error getting emails:', error);
    return [];
  }
};

/**
 * Clear all stored emails
 */
export const clearEmails = (): void => {
  localStorage.removeItem(EMAIL_STORAGE_KEY);
};
