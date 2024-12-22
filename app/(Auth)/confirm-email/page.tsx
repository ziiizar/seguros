
const page = () => {

  
  return (
    <main className="h-screen w-screen flex place-content-center items-center ">
      <section className="flex flex-col gap-4 p-4 w-[550px]">
        <div>
          <p className="text-3xl font-bold">We need to confirm that it’s really you.</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Please check your email for a link to confirm your account. This may take a few minutes.</p>
          <ul>
            <li>1. Open the email from GPF Services LLC.  </li>
            <li>2. Click on the reset link provided.</li>
            <li>3. You will be redirected with your profile confirmed.</li>
          </ul>
        </div>
        <div>
          <button className=" bg-granny-smith-400 rounded-3xl w-full py-3">Cancel</button>
        </div>
      </section>
    </main>
  );
};

export default page;
