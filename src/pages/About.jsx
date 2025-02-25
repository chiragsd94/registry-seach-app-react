const About = () => {
  return (
    <div className="m-2 p-2">
      <h1>About NPM Package Search App</h1>
      <p>
        Hi, I’m <strong>Chirag SD</strong>, and I built an{" "}
        <strong>NPM Package Search App</strong> using <strong>React</strong>.
        This application allows users to search for npm packages and retrieve
        their details dynamically.
      </p>

      <h2>Key Features & Technologies Used:</h2>
      <ul>
        <li>
          <strong>
            Programmatic Navigation (<code>useNavigate</code>)
          </strong>{" "}
          – Navigates to the details page dynamically based on user input.
        </li>
        <li>
          <strong>
            Custom Hook (<code>useFetch</code>)
          </strong>{" "}
          – Handles API requests efficiently.
        </li>
        <li>
          <strong>
            React Router (<code>useParams</code>, <code>useNavigate</code>,{" "}
            <code>Link</code>)
          </strong>{" "}
          – Manages routing and dynamic URL parameters.
        </li>
        <li>
          <strong>
            State Management (<code>useState</code>, <code>useEffect</code>)
          </strong>{" "}
          – Controls user input and API responses.
        </li>
        <li>
          <strong>Axios</strong> – Fetches package details from the{" "}
          <strong>NPM Registry API</strong>.
        </li>
      </ul>

      <h2>How It Works:</h2>
      <ol>
        <li>
          Users enter an <strong>npm package name</strong> in the search bar.
        </li>
        <li>
          On form submission, the app{" "}
          <strong>navigates programmatically</strong> to{" "}
          <code>/details/:title</code>.
        </li>
        <li>
          The app fetches the package details and displays relevant information
          like the <strong>latest version, author, and description</strong>.
        </li>
      </ol>

      <h2>📡 Data Source:</h2>
      <p>
        This project uses the{" "}
        <strong>
          <a
            href="https://registry.npmjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NPM Registry API
          </a>
        </strong>{" "}
        as the data source to fetch package details dynamically.
      </p>

      <p>
        This project follows best practices, ensuring smooth navigation and a
        clean user experience. 🚀
      </p>
    </div>
  );
};

export default About;
