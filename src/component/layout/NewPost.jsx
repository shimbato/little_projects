import { Form } from "react-router-dom";

export const NewPost = () => {
  return (
    <>
      <Form action="/posts/new" method="post">
      <label>
        Title
        <input type="text" name="title"></input>
      </label>
      <label>
        Body
        <input type="text" name="body"></input>
      </label>
        <input type="hidden" name="userId" value="1"></input>
        <input type="submit"  value="Add post"></input>
        </Form>
    </>
  );
};
