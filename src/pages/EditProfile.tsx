import { FunctionComponent } from "react";
import InputNode from "../components/InputNode";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent from "../components/GroupComponent";
import TextBlockNode from "../components/TextBlockNode";
import TextPathNode from "../components/TextPathNode";
import styles from "./EditProfile.module.css";

const EditProfile: FunctionComponent = () => {
  return (
    <div className={styles.editProfile}>
      <InputNode />
      <main className={styles.arrowNode}>
        <section className={styles.textboxNode}>
          <div className={styles.buttonNode}>
            <div className={styles.tabNode}>
              <div className={styles.sliderNode}>
                <div className={styles.progressBarNode}>
                  <div className={styles.listNode}>
                    <h3 className={styles.owners}>Owner(s)</h3>
                    <div className={styles.columnNode}>
                      <div className={styles.rowNode}>
                        <div className={styles.walker} />
                        <div className={styles.searchByName}>
                          Search by Name, Email
                        </div>
                      </div>
                    </div>
                    <div className={styles.polygonNode}>
                      <img
                        className={styles.miamiIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  alt=""
                  src="/mask-group.svg"
                />
              </div>
            </div>
            <form className={styles.imageGalleryNode}>
              <GroupComponent2
                propWidth="100%"
                propMargin="0 !important"
                propPosition="absolute"
                propTop="25px"
                propRight="0px"
                propLeft="0px"
                propBottom="unset"
                propAlignSelf="unset"
                propDisplay="inline-block"
                propDisplay1="inline-block"
                propDisplay2="inline-block"
                propDisplay3="inline-block"
                propDisplay4="inline-block"
                propDisplay5="inline-block"
                propDisplay6="inline-block"
                propDisplay7="inline-block"
              />
              <GroupComponent
                stellerAutomotive="Robert Bosch GmbH"
                text="5"
                icchevrondown="20"
                italy="Germany"
                propWidth="100%"
                propMargin="0 !important"
                propPosition="absolute"
                propTop="130px"
                propRight="0px"
                propLeft="0px"
                propDisplay="inline-block"
                propDisplay1="inline-block"
                propDisplay2="inline-block"
                propPadding="0px var(--padding-2xl)"
                propDisplay3="inline-block"
                propDisplay4="inline-block"
                propDisplay5="inline-block"
                propDisplay6="inline-block"
                propPadding1="0px 0px 0px var(--padding-10xs)"
                propDisplay7="inline-block"
              />
              <GroupComponent
                stellerAutomotive="Steller Automotive"
                text="12"
                icchevrondown="28"
                italy="Italy"
                propWidth="100%"
                propMargin="0 !important"
                propPosition="absolute"
                propTop="235px"
                propRight="0px"
                propLeft="0px"
                propDisplay="inline-block"
                propDisplay1="inline-block"
                propDisplay2="inline-block"
                propPadding="0px var(--padding-base) 0px var(--padding-mid)"
                propDisplay3="inline-block"
                propDisplay4="inline-block"
                propDisplay5="inline-block"
                propDisplay6="inline-block"
                propPadding1="0px var(--padding-10xs)"
                propDisplay7="inline-block"
              />
              <GroupComponent2
                propWidth="100%"
                propMargin="0 !important"
                propPosition="absolute"
                propTop="unset"
                propRight="0px"
                propLeft="0px"
                propBottom="210px"
                propAlignSelf="unset"
                propDisplay="inline-block"
                propDisplay1="inline-block"
                propDisplay2="inline-block"
                propDisplay3="inline-block"
                propDisplay4="inline-block"
                propDisplay5="inline-block"
                propDisplay6="inline-block"
                propDisplay7="inline-block"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.ownerParent}>
                  <div className={styles.owner}>Owner</div>
                  <div className={styles.robertBoschGmbh}>
                    Robert Bosch GmbH
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.image21Parent}>
                    <img
                      className={styles.image21Icon}
                      alt=""
                      src="/image-21@2x.png"
                    />
                    <div className={styles.checkSomeOfLatestNewsArt} />
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.chainsParent}>
                      <div className={styles.chains}>Chains</div>
                      <div className={styles.divbuttondownWrapper}>
                        <div className={styles.divbuttondown}>5</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.latestBlogWrapper}>
                    <div className={styles.latestBlog} />
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.garagesParent}>
                      <div className={styles.garages}>Garages</div>
                      <div className={styles.divbuttonupWrapper}>
                        <div className={styles.divbuttonup}>20</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.locationParent}>
                      <div className={styles.location}>Location</div>
                      <div className={styles.germanyWrapper}>
                        <div className={styles.germany}>Germany</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameInner} />
                  <div className={styles.frameWrapper1}>
                    <div className={styles.dividerNodeParent}>
                      <img
                        className={styles.dividerNodeIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-11.svg"
                      />
                      <div className={styles.calculatorNode}>
                        <img
                          className={styles.groupIcon}
                          loading="lazy"
                          alt=""
                          src="/group-11.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.ownerGroup}>
                  <div className={styles.owner1}>Owner</div>
                  <div className={styles.stellerAutomotive}>
                    Steller Automotive
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.lineContainer}>
                    <div className={styles.lineDiv} />
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.chainsGroup}>
                      <div className={styles.chains1}>Chains</div>
                      <div className={styles.wrapper}>
                        <div className={styles.div}>12</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineFrame}>
                    <div className={styles.frameChild1} />
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.garagesGroup}>
                      <div className={styles.garages1}>Garages</div>
                      <div className={styles.container}>
                        <div className={styles.div1}>28</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineWrapper1}>
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.locationGroup}>
                      <div className={styles.location1}>Location</div>
                      <div className={styles.italyWrapper}>
                        <div className={styles.italy}>Italy</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineWrapper2}>
                    <div className={styles.frameChild3} />
                  </div>
                  <div className={styles.readMoreWrapper}>
                    <img
                      className={styles.readMoreIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-11.svg"
                    />
                  </div>
                  <div className={styles.groupWrapper}>
                    <img
                      className={styles.groupIcon1}
                      loading="lazy"
                      alt=""
                      src="/group-11.svg"
                    />
                  </div>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild4} />
                  <div className={styles.noLogo}>No Logo</div>
                </div>
              </div>
              <div className={styles.image21Group}>
                <img
                  className={styles.image21Icon1}
                  loading="lazy"
                  alt=""
                  src="/image-21@2x.png"
                />
                <div className={styles.groupDiv}>
                  <div className={styles.frameChild5} />
                  <div className={styles.noLogo1}>No Logo</div>
                </div>
                <div className={styles.frameChild6} />
                <TextBlockNode editProfile="Edit Profile" />
                <div className={styles.calloutNode}>
                  <div className={styles.arcNode}>
                    <div className={styles.ellipseNode}>
                      <div className={styles.rectangleNode}>
                        <div className={styles.firstNameContainer}>
                          <span
                            className={styles.firstName}
                          >{`First Name `}</span>
                          <span className={styles.span}>*</span>
                        </div>
                        <div className={styles.starNode} />
                      </div>
                      <div className={styles.rectangleNode1}>
                        <div className={styles.email}>{`Email `}</div>
                        <div className={styles.whatAreTheAdvantagesOfBis} />
                      </div>
                      <div className={styles.polygonNode1}>
                        <div
                          className={styles.uploadProfileImage}
                        >{`Upload Profile Image `}</div>
                        <div className={styles.rectangleParent1}>
                          <div className={styles.frameChild7} />
                          <div className={styles.customShapeNode}>
                            <img
                              className={styles.arrowIcon}
                              alt=""
                              src="/vector-111.svg"
                            />
                          </div>
                          <div className={styles.uploadImage}>Upload Image</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.heartShapeNode}>
                      <div className={styles.vectorShapeNode}>
                        <div className={styles.lastNameContainer}>
                          <span className={styles.lastName}>Last Name</span>
                          <span className={styles.span1}>{` `}</span>
                          <span className={styles.span2}>*</span>
                        </div>
                        <div className={styles.arrow} />
                      </div>
                      <div className={styles.vectorShapeNode1}>
                        <div className={styles.phone}>
                          <span className={styles.phone1}>Phone</span>
                          <span className={styles.span3}>{` `}</span>
                        </div>
                        <div className={styles.faqQuestion} />
                      </div>
                    </div>
                  </div>
                </div>
                <TextPathNode />
              </div>
            </form>
          </div>
          <GroupComponent2
            propWidth="unset"
            propMargin="unset"
            propPosition="unset"
            propTop="unset"
            propRight="unset"
            propLeft="unset"
            propBottom="unset"
            propAlignSelf="stretch"
            propDisplay="inline-block"
            propDisplay1="inline-block"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propDisplay5="inline-block"
            propDisplay6="inline-block"
            propDisplay7="inline-block"
          />
        </section>
      </main>
      <div className={styles.triangleProducer} />
      <div className={styles.circleFormer}>
        <div className={styles.arrowPointer} />
      </div>
      <div className={styles.arrow1} />
      <footer className={styles.proximitySensor}>
        <div className={styles.gridOrganizer}>
          <div className={styles.snapper}>
            <img
              className={styles.snapperChild}
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <div className={styles.snapper1}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
          </div>
          <div className={styles.snapper2}>
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector-5.svg"
            />
          </div>
          <div className={styles.snapper3}>
            <img
              className={styles.snapperItem}
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
          </div>
          <div className={styles.frameBuilder}>
            <div className={styles.dividerMaker}>
              <div className={styles.page}>{`Page `}</div>
              <div className={styles.of1}>1 of 1</div>
            </div>
            <div className={styles.goToPage}>{`Go to Page: `}</div>
          </div>
          <div className={styles.positionPredictor}>
            <div className={styles.sizeScaler}>
              <div className={styles.colorPicker} />
              <div className={styles.logo}>1</div>
            </div>
          </div>
          <div className={styles.symbolStocker}>
            <div className={styles.shapeCatalog} />
            <div className={styles.go}>Go!</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EditProfile;
