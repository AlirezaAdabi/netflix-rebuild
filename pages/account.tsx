import Head from "next/head";
import Link from "next/link";
import Membership from "../components/Membership";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";
import products from "../constants/plans";

const Account = () => {
  const { user, logout } = useAuth();
  const subscription = useSubscription(user);
  const productName = products.filter(
    (product) => product.id === subscription?.selectedPlan
  )[0]?.name;
  console.log(subscription);

  return (
    <div>
      <Head>
        <title>Account Setting - Netflix</title>
        <link rel="icon" href="/netflix.ico" />
      </Head>
      <header className={`bg-[#141414]`}>
        <Link href="/">
          <img
            src={"/assets/Logo.svg"}
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <img
            src={"/assets/Account.png"}
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </header>

      <main className="mx-auto max-w-6xl pt-24 px-5 pb-12 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src={"/assets/membersince.svg"} alt="" />
            <p className="text-xs font-semibold text-[#555]">
              Member since {subscription?.createdDate}
            </p>
          </div>
        </div>
        <Membership />
        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
          <h4 className="text-lg text-[gray]">Plan Details</h4>
          {/* Find the current plan */}
          <div className="col-span-2 font-medium">{productName}</div>
          <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
            Change plan
          </p>
        </div>
        <div
          className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4
        md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0"
        >
          <h4 className="text-lg text-[gray]">Settings</h4>
          <p
            className="col-span-3 cursor-pointer text-blue-500 hover:underline"
            onClick={logout}
          >
            Sign out of all devices
          </p>
        </div>
      </main>
    </div>
  );
};

export default Account;
