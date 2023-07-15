import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChatRequestOptions } from 'ai';

interface props {
  value: string;
  OnChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  submit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
}
export function InputWithButton({ OnChange, submit, value }: props) {
  return (
    <form className="flex w-full items-center space-x-2 mt-4" onSubmit={submit}>
      <Input
        type="text"
        placeholder="hello robot! 😁"
        className="bg-transparent text-slate-200"
        value={value}
        onChange={OnChange}
      />
      <Button type="submit" className='bg-slate-200 text-rose-600 font-bold uppercase'>Send</Button>
    </form>
  );
}
