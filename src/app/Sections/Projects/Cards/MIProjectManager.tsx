import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const MIProjectManager = () => (
  <Card
    description="This project was designed to streamline the process of handling thesis proposals and evaluations. It addresses the challenge of coordinating between students, professors, and course coordinators by allowing clients to submit proposals, professors to manage and evaluate them, and coordinators to distribute projects efficiently. This project enhances visibility and organization through a dashboard, simplifying the tracking and management of thesis progress. It was developed in collaboration with key stakeholders, demonstrating a comprehensive application of computer science engineering skills to solve real-world administrative problems."
    websiteUrl="https://idear.espol.edu.ec/sites/default/files/posters/edicion_x/TECH_350_Desarrollo%20de%20una%20versi%C3%B3n%20mejorada%20del%20m%C3%B3dulo%20de%20gesti%C3%B3n%20de%20proyectos%20de%20materia%20integradora%20de%20la%20ESPOL.pdf"
    imgAlt="System for managing thesis projects of ESPOL"
    title="System for managing ESPOL thesis projects"
    imgUrl="/images/mi-project-manager-banner.png"
  >
    <Technologies>
      <Tag>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1052 1052">
          <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
          <path
            d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
            fill="#323330"
          />
        </svg>

        <p className="text-center">JavaScript</p>
      </Tag>

      <Tag>
        <svg
          viewBox="0 0 256 257"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <linearGradient x1="-.828%" y1="7.652%" x2="57.636%" y2="78.411%" id="a">
              <stop stop-color="#41D1FF" offset="0%" />
              <stop stop-color="#BD34FE" offset="100%" />
            </linearGradient>
            <linearGradient x1="43.376%" y1="2.242%" x2="50.316%" y2="89.03%" id="b">
              <stop stop-color="#FFEA83" offset="0%" />
              <stop stop-color="#FFDD35" offset="8.333%" />
              <stop stop-color="#FFA800" offset="100%" />
            </linearGradient>
          </defs>
          <path
            d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
            fill="url(#a)"
          />
          <path
            d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
            fill="url(#b)"
          />
        </svg>

        <p className="text-center">Vite</p>
      </Tag>

      <Tag>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          viewBox="0 -6 256 256"
          height="24"
          width="24"
        >
          <path
            d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
            fill="#764ABC"
          />
        </svg>

        <p className="text-center">Redux</p>
      </Tag>

      <Tag>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" width={24} height={24}>
          <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
          <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
          <path
            fill="#ecedee"
            d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
          />
          <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
        </svg>

        <p className="text-center">HTML-5</p>
      </Tag>

      <Tag>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" height={24} width={24}>
          <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
          <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
          <path
            fill="#ecedee"
            d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
          />
          <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z" />
        </svg>

        <p className="text-center">CSS 3</p>
      </Tag>

      <Tag>
        <svg
          viewBox="0 0 256 154"
          width={24}
          height={24}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient">
              <stop stop-color="#2298BD" offset="0%"></stop>
              <stop stop-color="#0ED7B5" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
            fill="url(#gradient)"
          ></path>
        </svg>

        <p className="text-center">Tailwind CSS</p>
      </Tag>

      <Tag>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 256 256"
          width={24}
          height={24}
        >
          <path
            d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33"
            fill="#DE4C36"
          />
        </svg>

        <p className="text-center">Git</p>
      </Tag>

      <Tag>
        <svg
          viewBox="0 0 32 32"
          width={24}
          height={24}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="tanukiHomeDesktop"
        >
          <path
            d="m31.46 12.78-.04-.12-4.35-11.35A1.14 1.14 0 0 0 25.94.6c-.24 0-.47.1-.66.24-.19.15-.33.36-.39.6l-2.94 9h-11.9l-2.94-9A1.14 1.14 0 0 0 6.07.58a1.15 1.15 0 0 0-1.14.72L.58 12.68l-.05.11a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48 6.67-5h.02a8.09 8.09 0 0 0 2.7-9.36Z"
            fill="#E24329"
          />
          <path
            d="m31.46 12.78-.04-.12a14.75 14.75 0 0 0-5.86 2.64l-9.55 7.24 6.09 4.6 6.67-5h.02a8.09 8.09 0 0 0 2.67-9.36Z"
            fill="#FC6D26"
          />
          <path
            d="m9.9 27.14 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48-6.1-4.6-6.07 4.6Z"
            fill="#FCA326"
          />
          <path
            d="M6.44 15.3a14.71 14.71 0 0 0-5.86-2.63l-.05.12a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 6.1-4.6-9.56-7.24Z"
            fill="#FC6D26"
          />
        </svg>

        <p className="text-center">GitLab</p>
      </Tag>
    </Technologies>
  </Card>
);

export { MIProjectManager };
