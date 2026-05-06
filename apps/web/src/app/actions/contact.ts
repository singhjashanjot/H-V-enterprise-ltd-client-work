'use server';

export async function sendQuoteEmail(data: any) {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New Quote Request from ${data.firstName} ${data.lastName}`,
        from_name: 'HV Enterprise Ltd Website',
        ...data,
      }),
    });

    const result = await response.json();
    
    if (response.ok && result.success) {
      return { success: true };
    }
    
    return { success: false, error: result.message || 'Submission failed' };
  } catch (error: any) {
    console.error('Email sending error:', error);
    return { success: false, error: error.message || 'Internal server error' };
  }
}
