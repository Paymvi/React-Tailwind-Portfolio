export const BgSandbox = () => {
  return (
    <div>
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('/black.png')", // ← Change this to your image path
        }}
      />
    </div>
  );
};

export default BgSandbox;
