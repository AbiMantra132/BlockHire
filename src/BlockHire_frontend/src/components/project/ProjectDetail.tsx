import Title from "../ui/Title";
import P from "../ui/P";
import SkillOpt from "../ui/SkillOpt";

export default function ProjectDetail() {
  return (
    <div className="flex flex-col justify-start items-start gap-10 w-full">
      {/* HEAD */}
      <div className="flex flex-col justify-start items-start gap-3 w-full">
        <Title children={"Frontend Developer"} />
        <div className="flex flex-row justify-start items-center gap-5">
          <P>Posted 20 Feb 2025</P>
          <div className="flex flex-roow justify-start items-center gap-2">
            <img src="/images/freelancer/location.svg" alt="location" />
            <P>Worldwide</P>
          </div>
          <div className="flex flex-roow justify-start items-center gap-2">
            <img src="/images/freelancer/person.svg" alt="person" />
            <P>2 Freelancer</P>
          </div>
        </div>
      </div>
      {/* BODY */}
      <div className="flex w-full justify-start items-start">
        <P>
          The goal of the Acorn Ephesus project is to collect ambient
          (background) sound from homes across the globe. To participate in this
          project, you must complete two, 1-hour audio recordings in your home,
          one during the day and one at night. These recordings must be free
          from any unwanted sounds as described below.Project
          Requirements:Device: iPhone (iPhone 12 or newer)Recording application:
          Voice Memos - lossless mode; 48 kHzLocation: In your home, following
          the specific instructions for device placement provided by your
          project manager over text(you should be assigned to two of the options
          below):Open window: The recordings should be made in a room with an
          open window.Closed window: The recordings should be made in a room
          with a closed window.Window sill: The device should be placed by the
          window or window sill.1 meter, 2 meters, 3 meters from the window: The
          device should be placed either 1 meter, 2 meters or 3 meters from the
          window.In the middle of the room: The device should be placed more or
          less in the center of the room.
        </P>
      </div>
      {/* FOOT */}
      <div className="flex w-full flex-col gap-4 justify-start items-start">
        <h3 className="text-black text-2xl font-bold">Skills</h3>
        <SkillOpt skill="Website" isActive={true} notClick={true} />
      </div>
    </div>
  );
}
