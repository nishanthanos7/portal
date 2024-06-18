import Link from "next/link";

const Dropdown = () => {
  return (
    <>
      <div className="  bg-slate-400 w-40 rounded-lg mr-20  ">
        <ul className="text-center ">
          <li>
            <Link href={""}>शिक्षा</Link>
          </li>
          <li>
            <Link href={""}>स्वास्थ्य</Link>
          </li>
          <li>
            <Link href={""}>मनोरञ्जन</Link>
          </li>

          <li>
            <Link href={"/media"}>मिडिया </Link>
          </li>

          <li>
            <Link href={""}>विचार</Link>
          </li>
          <li>
            <Link href={""}>पर्यटन</Link>
          </li>
          <li>
            <Link href={""}>खेलकुद</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
