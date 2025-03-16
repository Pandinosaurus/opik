import React, { useEffect } from "react";
import last from "lodash/last";
import { Navigate, Outlet, useLocation } from "@tanstack/react-router";
import useProjectById from "@/api/projects/useProjectById";
import useBreadcrumbsStore from "@/store/BreadcrumbsStore";
import { useProjectIdFromURL } from "@/hooks/useProjectIdFromURL";

// Add a CSS module or global styles to handle the scrolling behavior
// This will ensure child routes inherit the proper layout

const ProjectPage = () => {
  const setBreadcrumbParam = useBreadcrumbsStore((state) => state.setParam);
  const projectId = useProjectIdFromURL();

  const { data } = useProjectById({
    projectId,
  });

  useEffect(() => {
    if (data?.name) {
      setBreadcrumbParam("projectId", projectId, data.name);
    }
  }, [projectId, data?.name, setBreadcrumbParam]);

  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  if (last(pathname.split("/")) === projectId) {
    return <Navigate to={pathname + "/traces"} />;
  }

  // The key is to not add overflow-hidden here, as it might be causing the bottom content to be cut off
  return <Outlet />;
};

export default ProjectPage;
