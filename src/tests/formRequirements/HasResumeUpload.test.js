import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { shallow, configure } from "enzyme";
import ResumeSubmitForm from "../../components/form/ResumeSubmitForm";



  describe("it should have a resume input field", () => {
    it('contains the resume input field', () => {
      const wrapper = shallow(<ResumeSubmitForm />);
      const magicWords = (
        <h3>
              Copy and paste your resume for consideration (please format it). *
            </h3>
     
      );
      expect(wrapper.contains(magicWords)).toEqual(true);
    });
  });