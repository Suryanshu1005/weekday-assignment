import {Card, CardContent, Typography} from "@mui/material";
import hourglass from "../assets/hourglass-icon.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import JobDescription from "./JobDescription";
import JobsButtons from "./JobsButtons";
import LoadingSkeleton from "./LoadingSkeleton";
import JobTitle from "./JobTitle";
import JobRole from "./JobRole";
import JobLocation from "./JobLocation";
import JobSalary from "./JobSalary";
import JobExperience from "./JobExperience";

const JobCard = ({jobs, fetchMore, filter}) => {
  const isFilterEmpty =
    !filter.basePay &&
    !filter.exp &&
    !filter.location &&
    !filter.roles &&
    !filter.search;
  //for the impementation of infinte scroll I have made use of
  //react-infinite-scroll-component library. it is known in the community
  //and provides more better UX.

  const settings = {
    dataLength: jobs.length,
    next: fetchMore,
    hasMore: true,
    loader: isFilterEmpty ? <LoadingSkeleton /> : null,
    endMessage: <p>No more jobs to load</p>,
    scrollThreshold: 0.8,
  };

  //  As you will see below, I have broken down all the different parts of the job card into smaller components
  // this will be usefull when working with longer code.

  return (
    <div>
      <InfiniteScroll {...settings}>
        <div className="job-card">
          {jobs?.map((job, index) => {
            return (
              <Card
                key={index}
                sx={{
                  boxShadow:
                    "0px 2px 5px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                  border: "5px solid rgba(255, 255, 255,255)",
                  maxWidth: 650,
                  borderRadius: "20px",
                  padding: "8px 20px",
                  gap: "2px",
                  margin: "20px",
                }}
              >
                <Card
                  sx={{
                    boxShadow:
                      "0px 2px 2px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)",
                    border: "5px solid rgba(255, 255, 255,255)",
                    marginBottom: "35px",
                    // padding: "2px",
                    maxWidth: "120px",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={hourglass} alt="timer" width={13} height={20} />
                  <Typography fontFamily={"Lexend"} fontSize={10}>
                    Posted 10 days ago
                  </Typography>
                </Card>
                <div style={{display: "flex"}}>
                  <img
                    src={job?.logoUrl}
                    component="img"
                    height="50"
                    alt="Dive Photos"
                    width={30}
                  />
                  <div>
                    <JobTitle job={job} />
                    <JobRole job={job} />
                    <JobLocation job={job} />
                  </div>
                </div>
                <JobSalary job={job} />
                <CardContent
                  sx={{
                    padding: "0",
                    marginTop: "10px",
                  }}
                >
                  <JobDescription
                    initialText={job.jobDetailsFromCompany.slice(0, 300)}
                    fullText={job.jobDetailsFromCompany}
                  />
                </CardContent>
                <JobExperience job={job} />
                <JobsButtons />
              </Card>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default JobCard;
