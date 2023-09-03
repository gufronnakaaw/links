import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

import links from '../data/links';
import socials from '../data/socials';

export default function App() {
  return (
    <div className="max-h-screen flex items-center flex-col">
      <div className="flex flex-col items-center mt-20">
        <img src="/eye.jpg" alt="author" className="rounded-full w-32 h-32" />
        <p className="font-outfit text-xl font-bold">Gufronnaka Arif Wildan</p>
      </div>
      <p className="font-outfit font-extralight text-sm">
        Backend Web Developer
      </p>

      <p className="font-outfit mt-8 font-extralight text-sm">
        Connect With Me
      </p>

      <div className="my-2">
        <div className="flex mb-4">
          {links.map((link, index) => {
            return (
              <>
                <a
                  href={link.url}
                  target="_blank"
                  key={index}
                  data-tooltip-id={`tooltip-${link.title}`}
                  data-tooltip-content={link.title}
                >
                  <i className={`${link.icon} text-[28px] mx-4`}></i>
                </a>
                <Tooltip id={`tooltip-${link.title}`} className="font-outfit" />
              </>
            );
          })}
        </div>

        <div className="flex justify-center">
          {socials.map((social, index) => {
            return (
              <>
                <a
                  href={social.url}
                  target="_blank"
                  key={index}
                  data-tooltip-id={`tooltip-${social.title}`}
                  data-tooltip-content={social.title}
                >
                  <i className={`${social.icon} text-[28px] mx-2`}></i>
                </a>
                <Tooltip
                  id={`tooltip-${social.title}`}
                  className="font-outfit"
                />
              </>
            );
          })}
        </div>
      </div>
      <footer className="font-outfit absolute bottom-3">
        <small>
          Built by{' '}
          <span>
            <a href="https://wildandev.com" target="_blank">
              wildandev.com
            </a>
          </span>
        </small>
      </footer>
    </div>
  );
}
