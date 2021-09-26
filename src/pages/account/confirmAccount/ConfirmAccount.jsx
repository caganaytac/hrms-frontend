import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import UserService from "../../../services/userService";

export default function ConfirmAccount() {
  const { id } = useParams(),
    history = useHistory(),
    confirm = async (id) => {
      var result = await new UserService().confirm(id);
      result.data.success
        ? setTimeout(history.push("/"), 5000)
        : setTimeout(history.push("/"), 5000)
    };
  useEffect(() =>{
    document.title = "Confirm your account • HRMS";
    confirm(id)
  }, []);
  return <div>Your account has been confirmed.</div>;
}
