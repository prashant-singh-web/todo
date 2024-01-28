import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footermedium() {

  return (
    <div className="w-full grid place-items-center">
      <div className="w-[950px] xsm:w-[90%] py-5">
        <div className="w-full py-5 text-[#A3A3A3] text-sm font-medium xsm:hidden md:block">
          <p className="text-white">Online Mobile Shopping</p>
          <div className="w-full mt-2">
            <p>
              {" "}
              At 91mobiles, we help you decide "What to Buy" & "Where to Buy".
              Here are 5 easy ways to have an awesome 91mobiles shopping
              experience:
            </p>

            <ol className="pl-11 space-y-2 my-1 text-sm font-medium">
              <li>
                1. 91score: Every mobile phone has a score, based on our
                editors' extensive research. Select your price-range & feature
                requirements. And then buy the phone with the highest score.
                Simple.
              </li>
              <li>
                2. Latest Prices & Deals: Latest prices, deals, and facilities
                from all leading online stores are listed for every product.
                Just pick a Best Buy offer for the mobile you're looking for, to
                get the best combination of price & service.
              </li>
              <li>
                3. Find & Compare: Intuitive Finder & mobile comparison tool
                help you discover mobile phones & compare mobile specifications.
              </li>
              <li>
                4. Recommendations: Intelligent recommendations based on the
                products you browse help you find your ideal product.
              </li>
              <li>
                5. Offline Store Finder: Find mobile dealers & service centers
                near your location
              </li>
            </ol>
          </div>
          <p>
            Never miss a deal, price drop or launch by subscribing to our
            Exclusive Deals, Mobile Price & Mobile Launch alerts. Visit us
            regularly to get latest mobile price in India, tablet price in
            India, and laptop price in India.
          </p>
          <p className="mt-2">
            Thank you for making us one of the largest gadget discovery &
            shopping destinations in India!
          </p>
        </div>
        <div className="w-full border-y-2 border-gray-500 py-2">
          <div className="w-full border-b-2 border-gray-500 flex flex-col justify-start text-white sm:hidden">
            <p className="text-base">USEFUL LINKS</p>
            <div className="w-full my-3 uppercase flex flex-row divide-x space-x-2 text-[9px]  divide-gray-500 ">
              <a className="px-2 hover:text-green-300" href="/#">
                contact us
              </a>
              <a className="px-2 hover:text-green-300" href="/#">
                compare
              </a>
              <a className="px-2 hover:text-green-300" href="/#">
                top 10
              </a>
              <a className="px-2 hover:text-green-300" href="/#">
                91Mobiles hindi
              </a>
            </div>
            <p className="text-gray-300 text-xs my-5 hover:text-green-300">
              MOBILE SPECIFICATIONS DATABASE
            </p>
          </div>

          <div className="w-full  border-gray-500 flex flex-col justify-start text-white">
            <p className="text-base my-2">NEW MOBILE PHONES</p>
            <div className="w-[90%] md:w-[70%] grid grid-cols-2 gap-2 md:grid-cols-5  text-[#A3A3A3] text-sm font-medium m-2">
              <p className=" hover:text-green-300 cursor-pointer w-fit">mobile1</p>
              <p className=" hover:text-green-300 cursor-pointer w-fit">mobile2</p>
              <p className=" hover:text-green-300 cursor-pointer w-fit">mobile2</p>
              <p className=" hover:text-green-300 cursor-pointer w-fit">mobile2</p>
              <p className=" hover:text-green-300 cursor-pointer w-fit">mobile2</p>
              <p className=" hover:text-green-300 cursor-pointer w-fit">mobile2</p>
              <p className=" hover:text-green-300 cursor-pointer w-fit">mobile2</p>
              <p className=" hover:text-green-300 cursor-pointer w-fit">mobile2</p>
              <p className=" hover:text-green-300 cursor-pointer w-fit">mobile2</p>
              <p className=" hover:text-green-300 cursor-pointer w-fit">mobile2</p>
            </div>
          </div>
          <div className="w-full  border-gray-500 flex flex-col justify-start text-white">
            <p className="text-base my-2">MOBILE RECHARGE PLANS</p>
            <div
              className="w-[90%] md:w-[70%] grid grid-cols-2 gap-2 md:grid-cols-3 text-[#A3A3A3] text-sm font-medium
            m-2"
            >
              <p className=" hover:text-green-300 cursor-pointer">
                Airtel recharge plan
              </p>
              <p className=" hover:text-green-300 cursor-pointer">
                VI recharge plan
              </p>
              <p className=" hover:text-green-300 cursor-pointer">
                JIO recharge plan
              </p>
            </div>
          </div>
          <div className="w-full border-t-2 border-gray-500 flex flex-col justify-start text-white md:hidden">
            <p className="text-base my-2">CONNECT WITH US ON SOCIAL MEDIA</p>
            <div
              className="w-[90%] md:w-[70%] flex flex-row space-x-3 text-[#A3A3A3] text-base font-medium
            m-2"
            >
              <a href="/"><FaFacebookF/></a>
              <a href="/"><FaSquareXTwitter/></a>
              <a href="/"><FaYoutube/></a>
              <a href="/"><FaInstagram/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footermedium;
