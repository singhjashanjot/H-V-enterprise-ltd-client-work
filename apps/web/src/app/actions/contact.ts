'use server';

export async function sendQuoteEmail(data: any) {
  try {
    const response = await fetch('https://formsubmit.co/ajax/hventerprisesltd9@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        _subject: `New Quote Request from ${data.firstName} ${data.lastName}`,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const result = await response.json();
    
    if (response.ok && (result.success === 'true' || result.success === true)) {
      return { success: true };
    }
    
    return { success: false, error: result.message || 'Submission failed' };
  } catch (error: any) {
    console.error('Email sending error:', error);
    return { success: false, error: error.message || 'Internal server error' };
  }
}
