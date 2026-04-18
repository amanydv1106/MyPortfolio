
/* eslint-disable react/prop-types */

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="h-full w-full rounded-full bg-purple-500 opacity-20 blur-3xl animate-blob"></div>
    </div>
  );
};

export default BlurBlob;
