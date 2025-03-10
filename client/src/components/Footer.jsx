import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-10 ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*------- Left Section -------*/}
        <div className="">
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry is standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/*------- center Section -------*/}
        <div className="text.xl font-medium mb-5">
          <p className="">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="">Home</li>
            <li className="">About us</li>
            <li className="">Contact us</li>
          </ul>
        </div>

        {/*------- Right Section -------*/}
        <div className="">
          <p className="text.xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <div className="li">+221775931595</div>
            <div className="li">terscorp1@gmail.com</div>
          </ul>
        </div>
      </div>

      {/* ------- Copyright -------*/}
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Terracare - All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
