const Jobs = () => {
  const jobList = [
    "Ph.D",
    "Artist",
    "Self-management Coach",
    "Psychologist",
    "Developer",
    "Netflix"
  ];

  const path = jobList.map((value, index) => {
    return "/job" + index;
  });

  return {
    jobList,
    path,
  };
}

export default Jobs;
