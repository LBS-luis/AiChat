'use client';

import { useChat } from 'ai/react';
import { InputWithButton } from '@/components/InputWithButton';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg bg-zinc-900">      
      <Card className="max-w-[600px] w-[100%] grid grid-rows-[min-content_1fr_min-content] bg-transparent border-orange-300">
        <CardHeader>
          <CardTitle className="text-rose-600">AiChat</CardTitle>
          <CardDescription className="text-rose-200">
            implemented with HugginFace 🤗
          </CardDescription>
        </CardHeader>
        <ScrollArea className="max-h-[600px]">
          <CardContent className="space-y-2 flex flex-col">
            {messages.map((message) => {
              return (
                <div
                  className={`border-[1px] rounded-lg border-slate-200 p-4 w-fit ${message.role === 'user' ? 'place-self-start' : 'place-self-end'}`}
                  key={message.id}
                >
                  <h2
                    className={`mb-1 text-orange-300 ${
                      message.role === 'user' ? 'text-left' : 'text-right'
                    }`}
                  >
                    {message.role === 'user' ? 'You' : '🤗'}
                  </h2>
                  <p className="text-slate-200">{message.content}</p>
                </div>
              );
            })}
          </CardContent>
        </ScrollArea>
        <CardFooter>
          <InputWithButton
            value={input}
            OnChange={handleInputChange}
            submit={handleSubmit}
          />
        </CardFooter>
      </Card>
    </main>
  );
}
