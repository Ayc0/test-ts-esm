const fn = async () => {
  console.log("fn");
  const dynamic = (await import("./3-dynamic-file")).default;
  dynamic();
};

export default fn;
