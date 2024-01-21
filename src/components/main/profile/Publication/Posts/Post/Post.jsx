import PropTypes from 'prop-types';

function Post(props) {
  return (
    <div className="flex items-center justify-center">
      {' '}
      <div className="w-full my-4 p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <img
              className="w-12 h-12 rounded-full object-cover mr-4 shadow"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
            <div className="flex flex-col">
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                John Smith
              </div>
              <p className="text-gray-900 dark:text-gray-200">
                Joined 12 SEP 2012.{' '}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
              Category
            </button>
            <div className="text-xs text-gray-900 dark:text-gray-200">
              2 hours ago
            </div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
            {props.title}
          </div>
          <div className="text-sm text-gray-900 dark:text-gray-200">
            Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
            dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida
            nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum
            consectetur quis. Etiam faucibus est risus, ac condimentum mauris
            consequat nec. Curabitur eget feugiat massa
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-gray-900 dark:text-gray-300">
            <div className="flex space-x-4 md:space-x-8">
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1.5 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <span>125</span>
              </div>
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1.5 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                <span>{props.likesCount}</span>
              </div>
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="mr-1.5 h-5 w-5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <span>share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  likesCount: PropTypes.string.isRequired,
};
export default Post;
