interface ChatBubbleProps {
  isUser: boolean;
  value: string;
}

export default function ChatBubble({ isUser, value }: ChatBubbleProps) {
  return (
    <div
      className={`w-full flex items-center ${
        isUser ? "justify-end" : "justify-start"
      } `}
    >
      <div
        className={`${
          isUser
            ? "bg-[#2F89FC] text-white text-right rounded-tr-none"
            : "bg-[#E5F0F9] text-[#202020] text-left rounded-tl-none"
        } px-4 py-2 rounded-xl text-sm max-w-[70%]`}
      >
        {value}
      </div>
    </div>
  );
}
