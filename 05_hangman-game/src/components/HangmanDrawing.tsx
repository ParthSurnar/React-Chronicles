const Head =
  <div className="h-[50px] w-[50px] rounded-full absolute top-[50px] right-[-20px] border-[10px]" />;
const Body =
  <div className="h-[100px] w-[10px] border bg-black right-0 top-[100px] absolute" />;

const rightArm = <div className="h-[10px] w-[100px] top-[120px] right-[-90px] border bg-black rotate-[-30deg] absolute " />;

const leftArm = <div className="h-[10px] w-[100px] top-[120px] right-[0px] border bg-black rotate-[30deg] absolute " />;

const rightLeg = <div className="h-[10px] w-[100px] top-[230px] right-[-70px] border bg-black rotate-[60deg] absolute " />;

const leftLeg = <div className="h-[10px] w-[100px] top-[230px] right-[-20px] border bg-black rotate-[-60deg] absolute " />;
const HangmanDrawing = () => {
  return (
    <div className="relative">
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      {Head}
      <div className="h-[50px] w-[10px] bg-black ml-[120px] absolute top-0 right-0" />
      {Body}
      {rightArm}
      {leftArm}
      {rightLeg}
      {leftLeg}
      <div className="h-[400px] w-[10px] bg-black ml-[120px]" />

      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
};

export default HangmanDrawing;
