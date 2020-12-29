import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { shallow, configure } from "enzyme";
import ResumeSubmitForm from "../../components/form/ResumeSubmitForm";

describe("it should have a positions input field", () => {
  it("contains the positions input field", () => {
    const wrapper = shallow(<ResumeSubmitForm />);
    const magicWords = <h3>Which position(s) are you interested in? *</h3>;
    expect(wrapper.contains(magicWords)).toEqual(true);
  });
});
