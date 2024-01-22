function Messages() {
  return (
    <>
      <div className="flex flex-row antialiased text-gray-900 dark:text-white">
        <div className="flex flex-row w-96 flex-shrink-0 bg-gray-50 dark:bg-gray-700 p-4">
          <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                <div className="text-xl font-semibold">Messages</div>
                <div className="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">
                  5
                </div>
              </div>
              <div className="ml-auto">
                <button className="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
                  <svg
                    className="w-4 h-4 stroke-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-5">
              <ul className="flex flex-row items-center justify-between">
                <li>
                  <a
                    href="#"
                    className="flex items-center pb-3 text-xs font-semibold relative text-gray-300"
                  >
                    <span>All Conversations</span>
                    <span className="absolute left-0 bottom-0 h-1 w-6 bg-gray-300 rounded-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center pb-3 text-xs text-gray-700 font-semibold"
                  >
                    <span>Archived</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center pb-3 text-xs text-gray-700 font-semibold"
                  >
                    <span>Starred</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <div className="text-xs text-gray-400 font-semibold uppercase">
                Team
              </div>
            </div>
            <div className="mt-2">
              <div className="flex flex-col -mx-4">
                <div className="relative flex flex-row items-center p-4">
                  <div className="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
                    5 min
                  </div>
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="text-sm font-medium">Cuberto</div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2 self-end mb-1">
                    <span className="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
                      5
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center p-4 bg-gradient-to-r from-red-100 to-transparent border-l-2 border-red-500">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">UI Art Design</div>
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    </div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="text-xs text-gray-400 font-semibold uppercase">
                Personal
              </div>
            </div>
            <div className="h-full overflow-hidden relative pt-2">
              <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">
                <div className="flex flex-row items-center p-4 relative">
                  <div className="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
                    2 hours ago
                  </div>
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="text-sm font-medium">Flo Steinle</div>
                    <div className="text-xs truncate w-40">
                      Good after noon! how can i help you?
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2 self-end mb-1">
                    <span className="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
                      3
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center p-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">Sarah D</div>
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    </div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">Sarah D</div>
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    </div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">Sarah D</div>
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    </div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                    T
                  </div>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">Sarah D</div>
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    </div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis, doloribus?
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 mr-2">
                <button className="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-full px-4 py-6">
          <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100">
              T
            </div>
            <div className="flex flex-col ml-3">
              <div className="font-semibold text-sm">UI Art Design</div>
              <div className="text-xs text-gray-500">Active</div>
            </div>
            <div className="ml-auto">
              <ul className="flex flex-row items-center space-x-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
                  >
                    <span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        stroke="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
                  >
                    <span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        stroke="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
                  >
                    <span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-full overflow-hidden py-4">
            <div className="h-full overflow-y-auto">
              <div className="grid grid-cols-12 gap-y-2">
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-gray-50 dark:bg-gray-700 py-2 px-4 shadow rounded-xl">
                      <div>Hey How are you today?</div>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-gray-50 dark:bg-gray-700 py-2 px-4 shadow rounded-xl">
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel ipsa commodi illum saepe numquam maxime
                        asperiores voluptate sit, minima perspiciatis.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative mr-3 text-sm bg-gray-250 dark:bg-gray-500 py-2 px-4 shadow rounded-xl">
                      <div>I&apos;m ok what about you?</div>
                    </div>
                  </div>
                </div>
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative mr-3 text-sm bg-gray-250 dark:bg-gray-500 py-2 px-4 shadow rounded-xl">
                      <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-gray-50 dark:bg-gray-700 py-2 px-4 shadow rounded-xl">
                      <div>Lorem ipsum dolor sit amet !</div>
                    </div>
                  </div>
                </div>
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative mr-3 text-sm bg-gray-250 dark:bg-gray-500 py-2 px-4 shadow rounded-xl">
                      <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                      </div>
                      <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                        Seen
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-gray-50 dark:bg-gray-700 py-2 px-4 shadow rounded-xl">
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis, in.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-gray-50 dark:bg-gray-700 py-2 px-4 shadow rounded-xl">
                      <div className="flex flex-row items-center">
                        <button className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </button>
                        <div className="flex flex-row items-center space-x-px ml-4">
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-12 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-5 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-3 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Input Message */}
          <div className="flex flex-row items-center fixed bottom-0 py-4 z-50 antialiased bg-gray-50 dark:bg-zinc-800 min-w-screen">
            <div className="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
              <button className="flex items-center justify-center h-10 w-10 text-gray-400 ml-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  ></path>
                </svg>
              </button>
              <div className="w-full">
                <input
                  type="text"
                  className="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center dark:bg-gray-700"
                  placeholder="Type your message...."
                />
              </div>
              <div className="flex flex-row">
                <button className="flex items-center justify-center h-10 w-8 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                </button>
                <button className="flex items-center justify-center h-10 w-8 text-gray-400 ml-1 mr-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="ml-6">
              <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 hover:bg-gray-300 text-indigo-800 text-white">
                <svg
                  className="w-5 h-5 transform rotate-90 -mr-px"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Messages;
