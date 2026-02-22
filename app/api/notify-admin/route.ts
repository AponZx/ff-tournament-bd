import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // Hardcoded keys to guarantee it works instantly
    const botToken = '8249653542:AAECouLo9D2Ziyr6ZgFTx5lT4T-VaS3bYh4';
    const chatId = '5583020654';

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        chat_id: chatId, 
        text: message, 
        parse_mode: 'HTML' 
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json({ error: 'Telegram failed', details: data }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
