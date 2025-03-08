import ChatBubble from "./ChatBubble";

interface RoomChatProps {
  isActive: boolean;
  onClick: () => void;
}

export default function RoomChat({ isActive, onClick }: RoomChatProps) {
  return (
    <div
      className={`w-screen h-screen ${
        isActive ? "fixed" : "hidden"
      } bg-white/20 backdrop-blur-[5px] top-0 left-0 z-50 flex justify-center items-center`}
    >
      <div className="w-full h-full absolute top-0 left-0 z-10"></div>
      <div className="w-3/5 max-w-[800px] h-[500px] bg-white rounded-3xl relative z-20 overflow-hidden shadow-sm">
        {/* HEAD */}
        <div className="w-full bg-[#2F89FC] flex justify-between items-center gap-4 px-6 py-3">
          {/* PROFILE */}
          <div className="flex justify-start items-center gap-3">
            <div className="w-12 aspect-square rounded-full bg-slate-50">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="font-semibold text-white text-base">CryptTech</p>
              <p className="font-light text-white text-sm opacity-60">Online</p>
            </div>
          </div>
          {/* CLOSE */}
          <button
            onClick={onClick}
            className="w-12 aspect-square bg-transparent flex cursor-pointer justify-center items-center"
          >
            <img src="/images/home/close.svg" alt="" className="w-6" />
          </button>
        </div>
        {/* BODY */}
        <div className="flex flex-col justify-start items-start w-full px-6 py-6 gap-2 h-full overflow-y-scroll">
          <ChatBubble
            isUser={true}
            value="Hi, what do you think about this projects?"
          />
          <ChatBubble
            isUser={false}
            value="Oh for me, it's very important to make our company more shine than other company"
          />
          <ChatBubble
            isUser={false}
            value="I hope you can be our partner to successful our mission to become the best cryptocurrency framework ever sir!"
          />
          <ChatBubble isUser={false} value="Let's do the deal now!" />
          <ChatBubble isUser={true} value="Okay, nice to meet you sir" />
        </div>
        {/* INPUT */}
        <div className="w-full absolute bottom-0 left-0 pb-4 px-6 py-3 flex justify-between bg-[#E5F0F9] items-center gap-3">
          <input
            type="text"
            placeholder="Type something here..."
            className="w-full text-sm text-[#202020] outline-none"
          />
          <button className="w-fit ps-4 cursor-pointer hover:bg-[#3081eb] pe-5 py-2 rounded-md bg-[#2F89FC] flex justify-center items-center gap-2">
            <img src="/images/home/send.svg" alt="send" className="w-6" />
            <p className="text-white font-medium text-sm">Send</p>
          </button>
        </div>
      </div>
    </div>
  );
}
