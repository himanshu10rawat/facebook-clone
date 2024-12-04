import React from "react";
import style from "./aboutDetails.module.css";
import {
  FaEarthAfrica,
  FaFlag,
  FaLink,
  FaLinkedin,
  FaLocationDot,
  FaUser,
} from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import {
  FaBirthdayCake,
  FaBuilding,
  FaGraduationCap,
  FaHeart,
  FaHome,
  FaMale,
} from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { RiChatVoiceFill } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";

export const Overview = () => {
  return (
    <div className={style["overview-section"]}>
      <ul>
        <li>
          <div className={style["overview-detail"]}>
            <div className={style["icon"]}>
              <FaBuilding />
            </div>
            <div className={style["details"]}>
              <span className={style["title"]}>
                Web User Interface Developer at CodeYeti Software Solution Pvt.
                Ltd.
              </span>
              <span className={style["subTitle"]}>
                11 January 2021 to present
              </span>
            </div>
          </div>
          <div className={style["overview-edit"]}>
            <span className={style["privacy"]}>
              <FaEarthAfrica />
            </span>
            <span className={style["edit-option"]}>
              <BsThreeDots />
            </span>
          </div>
        </li>
        <li>
          <div className={style["overview-detail"]}>
            <div className={style["icon"]}>
              <FaGraduationCap />
            </div>
            <div className={style["details"]}>
              <span className={style["title"]}>
                Studied Bachelor of Commerce - B.Com with computer applications
                at <strong>University of Delhi</strong>
              </span>
              <span className={style["subTitle"]}>
                Attended from 2016 to 2020
              </span>
            </div>
          </div>
          <div className={style["overview-edit"]}>
            <span className={style["privacy"]}>
              <FaEarthAfrica />
            </span>
            <span className={style["edit-option"]}>
              <BsThreeDots />
            </span>
          </div>
        </li>
        <li>
          <div className={style["overview-detail"]}>
            <div className={style["icon"]}>
              <FaHome />
            </div>
            <div className={style["details"]}>
              <span className={style["title"]}>
                Lives in <strong>Delhi, India</strong>
              </span>
            </div>
          </div>
          <div className={style["overview-edit"]}>
            <span className={style["privacy"]}>
              <FaEarthAfrica />
            </span>
            <span className={style["edit-option"]}>
              <BsThreeDots />
            </span>
          </div>
        </li>
        <li>
          <div className={style["overview-detail"]}>
            <div className={style["icon"]}>
              <FaLocationDot />
            </div>
            <div className={style["details"]}>
              <span className={style["title"]}>
                From <strong>Bhikia Sain, Uttarakhand, India</strong>
              </span>
            </div>
          </div>
          <div className={style["overview-edit"]}>
            <span className={style["privacy"]}>
              <FaEarthAfrica />
            </span>
            <span className={style["edit-option"]}>
              <BsThreeDots />
            </span>
          </div>
        </li>
        <li>
          <div className={style["overview-detail"]}>
            <div className={style["icon"]}>
              <FaHeart />
            </div>
            <div className={style["details"]}>
              <span className={style["title"]}>Single</span>
            </div>
          </div>
          <div className={style["overview-edit"]}>
            <span className={style["privacy"]}>
              <FaEarthAfrica />
            </span>
            <span className={style["edit-option"]}>
              <BsThreeDots />
            </span>
          </div>
        </li>
        <li>
          <div className={style["overview-detail"]}>
            <div className={style["icon"]}>
              <IoCallSharp />
            </div>
            <div className={style["details"]}>
              <span className={style["title"]}>8448701868</span>
              <span className={style["subTitle"]}>Mobile</span>
            </div>
          </div>
          <div className={style["overview-edit"]}>
            <span className={style["privacy"]}>
              <FaEarthAfrica />
            </span>
            <span className={style["edit-option"]}>
              <BsThreeDots />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export const WorkAndEducation = () => {
  return (
    <div className={style["work-and-education-list"]}>
      <div className={style["list-item"]}>
        <h3>Work</h3>
        <div
          role="button"
          tabIndex={0}
          aria-label="Add a workplace"
          className={style["add-button"]}
        >
          <span className={style["icon"]}>
            <FiPlus />
          </span>
          <div className={style["text"]}>Add a workplace</div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaFlag className={style["flag-icon"]} />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>
                Web User Interface Developer at CodeYeti Software Solution Pvt.
                Ltd.
              </span>
              <span className={style["subtitle"]}>
                11 January 2021 - Present · Noida
              </span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
      <div className={style["list-item"]}>
        <h3>University</h3>
        <div
          role="button"
          tabIndex={0}
          aria-label="Add a workplace"
          className={style["add-button"]}
        >
          <span className={style["icon"]}>
            <FiPlus />
          </span>
          <div className={style["text"]}>Add university</div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaFlag className={style["flag-icon"]} />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>
                Studied Bachelor of Commerce - B.Com with computer applications
                at <strong>University of Delhi</strong>
              </span>
              <span className={style["subtitle"]}>School year 2020</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
      <div className={style["list-item"]}>
        <h3>High School</h3>
        <div
          role="button"
          tabIndex={0}
          aria-label="Add a workplace"
          className={style["add-button"]}
        >
          <span className={style["icon"]}>
            <FiPlus />
          </span>
          <div className={style["text"]}>Add secondary school</div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaFlag className={style["flag-icon"]} />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>
                Went to R.s.b.v school east vinod nagar new delhi 91
              </span>
              <span className={style["subtitle"]}>School year 2014</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export const PlacedLived = () => {
  return (
    <div className={style["placed-lived"]}>
      <div className={style["list-item"]}>
        <h3>Places lived</h3>
        <div
          role="button"
          tabIndex={0}
          aria-label="Add a workplace"
          className={style["add-button"]}
        >
          <span className={style["icon"]}>
            <FiPlus />
          </span>
          <div className={style["text"]}>Add city</div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaLocationDot />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>
                <strong>Delhi, India</strong>
              </span>
              <span className={style["subtitle"]}>Current town/city</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaLocationDot />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>
                <strong>Bhikia Sain, Uttarakhand, India</strong>
              </span>
              <span className={style["subtitle"]}>Home town</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export const ContactAndBasicInfo = () => {
  return (
    <div className={style["contact-basic-info"]}>
      <div className={style["list-item"]}>
        <h3>Contact info</h3>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <IoCallSharp />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>8448701868</span>
              <span className={style["subtitle"]}>Mobile</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <IoIosMail />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>hr14638@gmail.com</span>
              <span className={style["subtitle"]}>Email</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
      <div className={style["list-item"]}>
        <h3>Websites and social links</h3>
        <div
          role="button"
          tabIndex={0}
          aria-label="Add a workplace"
          className={style["add-button"]}
        >
          <span className={style["icon"]}>
            <FiPlus />
          </span>
          <div className={style["text"]}>Add a website</div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaLinkedin />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>
                <strong>himanshu-rawat-2vsb5fdj</strong>
              </span>
              <span className={style["subtitle"]}>LinkedIn</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaLink />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>
                <strong>https://himanshurawatportfolio.web.app/</strong>
              </span>
              <span className={style["subtitle"]}>Website</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
      <div className={style["list-item"]}>
        <h3>Basic info</h3>
        <div
          role="button"
          tabIndex={0}
          aria-label="Add a workplace"
          className={style["add-button"]}
        >
          <span className={style["icon"]}>
            <FiPlus />
          </span>
          <div className={style["text"]}>Add a language</div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaMale />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>Male</span>
              <span className={style["subtitle"]}>Gender</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <RiChatVoiceFill />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>he/him</span>
              <span className={style["subtitle"]}>System pronouns</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaBirthdayCake />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>20 August 1998</span>
              <span className={style["subtitle"]}>Birthday</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export const FamilyAndRelationships = () => {
  return (
    <div className={style["family-and-relationships"]}>
      <div className={style["list-item"]}>
        <h3>Relationship</h3>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaHeart />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>Single</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
      <div className={style["list-item"]}>
        <h3>Family members</h3>
        <div
          role="button"
          tabIndex={0}
          aria-label="Add a workplace"
          className={style["add-button"]}
        >
          <span className={style["icon"]}>
            <FiPlus />
          </span>
          <div className={style["text"]}>Add family member</div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaUser />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>
                <strong>Neeta Rawat</strong>
              </span>
              <span className={style["subtitle"]}>Sister</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaUser />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>
                <strong>Deepanshu Rawat</strong>
              </span>
              <span className={style["subtitle"]}>Brother</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export const DetailsAboutYou = () => {
  return (
    <div className={style["details-about-you"]}>
      <div className={style["list-item"]}>
        <h3>About you</h3>
        <div
          role="button"
          tabIndex={0}
          aria-label="Add a workplace"
          className={style["add-button"]}
        >
          <span className={style["icon"]}>
            <FiPlus />
          </span>
          <div className={style["text"]}>Write some details about yourself</div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <TfiWrite />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>Writting about myself</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
      <div className={style["list-item"]}>
        <h3>Other names</h3>
        <div
          role="button"
          tabIndex={0}
          aria-label="Add a workplace"
          className={style["add-button"]}
        >
          <span className={style["icon"]}>
            <FiPlus />
          </span>
          <div className={style["text"]}>Add a nickname, a birth name etc.</div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <div className={style["text"]}>
              <span className={style["title"]}>Hemu</span>
              <span className={style["subtitle"]}>Nickname</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <div className={style["text"]}>
              <span className={style["title"]}>Himu</span>
              <span className={style["subtitle"]}>Nickname</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export const LifeEventa = () => {
  return (
    <div className={style["life-events"]}>
      <div className={style["list-item"]}>
        <h3>Life events</h3>
        <div
          role="button"
          tabIndex={0}
          aria-label="Add a workplace"
          className={style["add-button"]}
        >
          <span className={style["icon"]}>
            <FiPlus />
          </span>
          <div className={style["text"]}>Add a life event</div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaMale />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>
                Graduated from University of Delhi
              </span>
              <span className={style["subtitle"]}>2020</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className={style["work"]}>
          <div className={style["work-details"]}>
            <span className={style["icon"]}>
              <FaMale />
            </span>
            <div className={style["text"]}>
              <span className={style["title"]}>
                Started studying at University of Delhi
              </span>
              <span className={style["subtitle"]}>2016</span>
            </div>
          </div>
          <div className={style["work-edit"]}>
            <span
              className={style["privacy"]}
              role="button"
              tabIndex={0}
              aria-label="Privacy"
            >
              <FaEarthAfrica />
            </span>
            <span
              className={style["edit-option"]}
              role="button"
              tabIndex={0}
              aria-label="Edit option"
            >
              <BsThreeDots />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
