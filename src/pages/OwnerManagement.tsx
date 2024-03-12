import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Navbarframe from "../components/Navbarframe";
import LineOwner2 from "../components/LineOwner2";
import LineOwner1 from "../components/LineOwner1";
import LineOwner from "../components/LineOwner";
import styles from "./OwnerManagement.module.css";

const OwnerManagement: FunctionComponent = () => {
  return (
    <div className={styles.ownerManagement}>
      <h3 className={styles.owners}>Owner(s)</h3>
      <img
        className={styles.rectangleFrameIcon}
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <img className={styles.frameOwnerIcon} alt="" src="/vector-1.svg" />
      <img className={styles.searchBoxIcon} alt="" src="/vector-2.svg" />
      <input
        className={styles.imageFrame}
        name="Search byOwner"
        placeholder="   Search by Owner"
        type="text"
      />
      <img className={styles.frameOwnerIcon1} alt="" src="/vector-3.svg" />
      <div className={styles.searchByOwner}>Search by Owner</div>
      <img
        className={styles.image1Icon}
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <footer className={styles.frameVehicles}>
        <div className={styles.page}>{`Page `}</div>
        <div className={styles.goToPage}>{`Go to Page: `}</div>
        <div className={styles.of1}>1 of 1</div>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
        <img className={styles.btnGroup} alt="" src="/vector-4.svg" />
        <img
          className={styles.btnPrimaryLg}
          loading="lazy"
          alt=""
          src="/group-2@2x.png"
        />
        <img className={styles.starIcon} alt="" src="/vector-5.svg" />
        <Form className={styles.lineVector}>
          <Form.Control type="text" />
        </Form>
        <div className={styles.lineVector1} />
        <div className={styles.lineVector2}>1</div>
        <div className={styles.go}>Go!</div>
      </footer>
      <div className={styles.frameOwner} />
      <div className={styles.frameOwner1} />
      <div className={styles.maskGroup}>
        <nav className={styles.frameAAG}>
          <div className={styles.vehicles}>Vehicles</div>
          <div className={styles.jobCards}>Job Cards</div>
          <div className={styles.management}>Management</div>
        </nav>
        <img className={styles.ownerChainIcon} alt="" src="/vector-2.svg" />
        <img className={styles.maskGroupChild} alt="" src="/line-1.svg" />
      </div>
      <div className={styles.maskGroup1}>
        <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
      </div>
      <div className={styles.frameAAGLocation}>
        <Navbarframe />
        <LineOwner2
          robertBoschGmbH="Robert Bosch GmbH"
          prop="5"
          prop1="20"
          germany="Germany"
        />
        <LineOwner2
          robertBoschGmbH="Steller Automotive"
          prop="12"
          prop1="28"
          germany="Italy"
          propTop="210px"
          propLeft="640px"
          propWidth="19px"
        />
        <LineOwner1
          robertBoschGmbH="Robert Bosch GmbH"
          prop="5"
          prop1="20"
          germany="Germany"
          image21="/image-21@2x.png"
        />
        <LineOwner2
          robertBoschGmbH="Steller Automotive"
          prop="12"
          prop1="28"
          germany="Italy"
          propTop="525px"
          propLeft="640px"
          propWidth="19px"
        />
        <LineOwner1
          robertBoschGmbH="AAG GPC"
          prop="20"
          prop1="59"
          germany="Norway"
          image21="/image-23@2x.png"
          propTop="630px"
          propWidth="86px"
          propLeft="640px"
          propWidth1="18px"
          propWidth2="59px"
          propLeft1="435px"
          propWidth3="53px"
        />
        <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
        <LineOwner />
      </div>
    </div>
  );
};

export default OwnerManagement;
