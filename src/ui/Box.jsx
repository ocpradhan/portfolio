function Box({ fontSize = "xs", children, border = false }) {
  return (
    <p
      className={`text-${fontSize} ${border ? "border-s border-[#CED4DA] ps-5" : ""}`}
    >
      {children}
    </p>
  );
}

export default Box;
