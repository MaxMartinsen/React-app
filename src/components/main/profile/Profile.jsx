import styles from './Profile.module.css';
import defaultImage from '/src/assets/image/default-image.jpg';
import defaultUser from '/src/assets/image/default-user.jpg';
import Posts from './Publication/Posts/Posts.jsx';
import EntrePost from './Publication/EntrePost/EntrePost.jsx';

function Profile() {
  return (
    <>
      <div className=" mb-4">
        <img
          className="w-screen object-cover h-60 border-2 rounded-lg border-gray-300 dark:border-gray-700"
          src={defaultImage}
          alt="Profile wallpaper"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="max-w-80">
          <img className="rounded-lg" src={defaultUser} alt="Profile image" />
        </div>
        <div className="grid col-auto">
          <div className="mb-2">
            <h1 className={styles.h1}>Name Surname</h1>
          </div>
          <div>
            <p className={styles.p}>Date of Birth:</p>
          </div>
          <div>
            <p className={styles.p}>City:</p>
          </div>
          <div>
            <p className={styles.p}>Education:</p>
          </div>
          <div>
            <p className={styles.p}>Web Site:</p>
          </div>
        </div>
      </div>
      <hr className="max-w-96 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
      {/* Entre */}
      <EntrePost />
      {/* Posts */}
      <Posts />
    </>
  );
}
export default Profile;
