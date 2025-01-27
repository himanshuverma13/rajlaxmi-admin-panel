import React, { useEffect, useState } from "react";
import feedimg from '../../Assets/images/profile/user2.jpg'
import { DeleteFeedbackAPI, FeedbackAPI } from "../APIs/api";
import { LuDot } from "react-icons/lu";
import { toast } from "react-toastify";

const FeedbackCards = () => {

  const [Feedback, setFeedback] = useState();
  console.log('Feedback: ', Feedback);

  const FetchFeedback = async () => {
    try {
      const response = await FeedbackAPI();
      setFeedback(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    FetchFeedback();
  }, []);

  const DeleteFeedback = async (id) => {
    try {
      const response = await DeleteFeedbackAPI(id)
       toast?.success(response?.message)
    } catch (error) {
      toast?.error(error?.message)
    }

  }

  return (
    <div className="row">
      <div className='mt-3 px-4'>
        <h2 className='fw-bolder'>Cards</h2>
        <p className='text-dark'>Dashboard <LuDot /> Feedback <LuDot /> <span className='text-muted'>Cards</span>
        </p>
      </div>
      {Feedback?.map((item) => (
        <div className="col-md-4 single-note-item all-category">
          <div className="card card-body">
            <span className="side-stick"></span>
            <div className="d-flex mb-3">
              <img width={50} className="me-3 rounded-circle" src={feedimg} alt="" />
              <div className="text-start">
                <h6
                  className="note-title text-truncate w-75 mb-0"
                  data-noteheading="Book a Ticket for Movie"
                >
                  {" "}
                  {item?.name}{" "}
                </h6>
                <p className="note-date fs-2 text-truncate">{item?.email}</p>
              </div>

            </div>
            <div className="note-content">
              <h6
                className="note-title fs-4 fw-bold text-start text-truncate w-75 mb-1"
                data-noteheading="Book a Ticket for Movie"
              >
                {" "}
                Book a Ticket for Movie{" "}
              </h6>
              <p
                className="note-inner-content"
                data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
              >
                {" "}
                {item?.feedback}{" "}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <a href="javascript:void(0)" className="link me-1">
                <i className="ti ti-star fs-4 favourite-note"></i>
              </a>
              <a className="link text-danger ms-2" onClick={() => DeleteFeedback(item?.user_id)}>
                <i className="ti ti-trash fs-4 remove-note"></i>
              </a>
              <div className="ms-auto">
                {/* <div class="category-selector btn-group">
                  <a
                    class="nav-link category-dropdown label-group p-0"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <div class="category">
                      <div class="category-business"></div>
                      <div class="category-social"></div>
                      <div class="category-important"></div>
                      <span class="more-options text-dark">
                        <i class="ti ti-dots-vertical fs-5"></i>
                      </span>
                    </div>
                  </a>
                    <div class="dropdown-menu dropdown-menu-right category-menu">
                      <a
                        class="
                                    note-business
                                    badge-group-item badge-business
                                    dropdown-item
                                    position-relative
                                    category-business
                                    d-flex
                                    align-items-center
                                  "
                        href="javascript:void(0);"
                      >
                        Business
                      </a>
                      <a
                        class="
                                    note-social
                                    badge-group-item badge-social
                                    dropdown-item
                                    position-relative
                                    category-social
                                    d-flex
                                    align-items-center
                                  "
                        href="javascript:void(0);"
                      >
                        {" "}
                        Social
                      </a>
                      <a
                        class="
                                    note-important
                                    badge-group-item badge-important
                                    dropdown-item
                                    position-relative
                                    category-important
                                    d-flex
                                    align-items-center
                                  "
                        href="javascript:void(0);"
                      >
                        {" "}
                        Important
                      </a>
                    </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackCards;
