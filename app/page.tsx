// export default function Page() {
//   return (
//     <div className="h-[100vh] w-full flex justify-center items-center text-center">
//       <h1 className="text-2xl text-white">HELLO</h1>
//     </div>
//   )
// }


import dynamic from "next/dynamic";

/**
 * disable ssr to avoid pre-rendering issues of Next.js
 *
 * we're doing this because we're using a canvas element that can't be pre-rendered by Next.js on the server
 */
const App = dynamic(() => import("./App"), { ssr: false });

export default App;