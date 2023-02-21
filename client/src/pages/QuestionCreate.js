// import MenuIcon from '@mui/icons-material/Menu';
// import Header from '../components/main/Header';

// import { useState } from 'react';
import styled from 'styled-components';
// import { ContainerBox } from './Home';
import { MainBox } from './Home';
const QuestionCreateWrap = styled.div`
  background-color: rgb(248, 249, 249);
`;
const QuestionCreateContainer = styled.div``;
const QuestionCreateTopContainer = styled.div`
  width: 1215.99px;
  height: 411.806px;
  /* background-color: gold; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const QuestionCreateTopHeader = styled.div`
  background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368);
  background-repeat: no-repeat;
  background-position: right bottom;
  width: 1216px;
  height: 130px;
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  display: flex;
  align-items: center;
  .Headline {
    font-size: 27px;
    font-weight: 600;
    margin: 24px 0;
    color: #232629;
  }
`;
const QuestionCreateTopNoticeBox = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
  width: 1216px;
  height: 249.125px;
  /* background-color: red; */
`;
const QuestionCreateTopNotice = styled.div`
  border: 0.8px;
  padding: 24px;
  width: 801.6px;
  box-sizing: content-box;
  background-color: #ebf4fb;
  border: 1px solid #a6ceed;
  border-radius: 3px;
  color: #464857;
  .NoticeH2 {
    font-weight: 400;
    font-size: 20px;
    /* background-color: yellow; */
    margin-bottom: 8px;
  }
  .NoticeContent {
    > a {
      color: #0074cc;
      font-weight: 300;
    }
  }
  .NoticeContentBottom {
    margin-bottom: 15px;
    > a {
      color: #0074cc;
      font-weight: 300;
    }
  }
  > li {
    font-size: 12px;
  }
`;
const QuestionCreateTitleBox = styled.div`
  width: 1216px;
  height: 125.3px;
  /* background-color: red; */
  display: flex;
  align-items: center;
`;
const QuestionCreateTitle = styled.div`
  box-sizing: content-box;
  width: 801.6px;
  height: 75.7px;
  padding: 24px;
  background-color: white;
  border: 1px solid #e3e6e8;
`;
const QuestionCreateLabelBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .LabelTop {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .LabelMiddle {
    margin-bottom: 5px;
  }
  .InputBox {
    width: 801.6px;
    height: 32.4px;
    margin: 2px 0;
    display: flex;
    justify-content: center;
    :focus-within {
      background-color: #caedff;
    }
    > input {
      margin: 0;
      height: 15.2px;
      width: 781.8px;
      padding: 7.8px 9.1px;
      border: 0.8px solid #babfc4;
      border-radius: 3px;

      :focus {
        /* border: 3px solid #caedff; */
        outline: 3px solid #caedff;
      }
    }
  }
`;
const ProblemBox = styled.div`
  width: 1216px;
  height: 450.7px;
  margin-top: 12px;
`;
const ProblemContainer = styled.div`
  width: 849.6px;
  height: 450.163px;
  border: 0.8px solid #e3e6e8;
  border-radius: 3px;
`;
const ProblemTextBox = styled.div`
  width: 848px;
  height: 448px;
  padding: 24px;
  background-color: white;
`;
const ProblemTextContainer = styled.div`
  width: 801.6px;
  height: 303.163px;
  margin: -2px 0;
`;
const ItemBox = styled.div`
  width: 801.6px;
  height: 43.3px;
  margin: 2px 0;
  display: flex;
`;
const ItemLabel = styled.label`
  font-weight: 600;
  font-size: 15px;
  padding: 0 2px;
  color: #232629;
  .ItemLabelParagraph {
    color: #3b4045;
    font-size: 10px;
    font-weight: 400;
    margin: 2px 0;
  }
`;
const ProblemTextarea = styled.textarea`
  width: 801.6px;
  height: 255.863px;
  margin-bottom: 30px;
  scroll-behavior: auto;
  :focus {
    /* border: 3px solid #caedff; */
    outline: 3px solid #caedff;
  }
`;
const QuestionSubmitBox = styled.div`
  height: 37.5px;
  width: 142.8px;
  border-radius: 4px;
  align-items: flex-end;
  display: flex;
  background-color: #53b5ff;
  border: 1px solid #0a95ff;
  .Submit {
    background-color: #0a95ff;
    font-size: 12px;
    color: white;
    box-sizing: content-box;
    width: 122.525px;
    height: 14px;
    padding: 10.4px;
    position: 0;
    border-style: none;
    border-radius: 3px;
    cursor: pointer;
    :hover {
      background-color: #0063c1;
    }
    :focus {
      outline: 4px solid #d6e9f7;
    }
  }
`;
const QuestionDiscard = styled.div`
  margin-top: 10px;
  margin-left: -8px;
  margin-right: -8px;
  height: 95.8px;
  height: 37.4px;
  display: flex;
  align-items: center;
  .DiscardBox {
    width: 96.188px;
    height: 37.781px;
    margin: 0 8px;
    display: flex;
    justify-content: center;
  }
  .DiscardButton {
    text-decoration: none;
    color: #c22e32 !important;
    border-style: none;
    background-color: rgb(248, 249, 249);
    width: 150px;
    cursor: pointer;
    :hover {
      background-color: #fdf1f1;
      border-radius: 5px;
    }
    :focus {
      border: 3px solid #efd9d9;
      background-color: #fdf1f1;
    }
    :active {
      background-color: #f7d3d3;
    }
  }
`;
const QuestionCreate = () => {
  // const [textValue, setTextValue] = useState('');

  return (
    <QuestionCreateWrap>
      <MainBox>
        <QuestionCreateContainer>
          <QuestionCreateTopContainer>
            <QuestionCreateTopHeader>
              <h1 className="Headline">Ask a pulic question</h1>
            </QuestionCreateTopHeader>
            <QuestionCreateTopNoticeBox>
              <QuestionCreateTopNotice>
                <h2 className="NoticeH2">Writing a good question</h2>
                <p className="NoticeContent">
                  You’re ready to&nbsp;
                  <a href="https://stackoverflow.com/help/how-to-ask">ask</a> a
                  <a href="https://stackoverflow.com/help/on-topic">
                    &nbsp;programming-related question
                  </a>
                  and this form will help guide you through the process.
                </p>
                <p className="NoticeContentBottom">
                  Looking to ask a non-programming question? See&nbsp;
                  <a href="https://stackexchange.com/sites#technology">
                    the topics here&nbsp;
                  </a>
                  to find a relevant site.
                </p>
                <h5 style={{ fontWeight: 600 }}>Step</h5>
                <ul style={{ marginLeft: 30 }}>
                  <li style={{ listStyle: 'disc' }}>
                    Summarize your problem in a one-line title.
                  </li>
                  <li style={{ listStyle: 'disc' }}>
                    Describe your problem in more detail.
                  </li>
                  <li style={{ listStyle: 'disc' }}>
                    Describe what you tried and what you expected to happen.
                  </li>
                  <li style={{ listStyle: 'disc' }}>
                    Add “tags” which help surface your question to members of
                    the community.
                  </li>
                  <li style={{ listStyle: 'disc' }}>
                    Review your question and post it to the site.
                  </li>
                </ul>
              </QuestionCreateTopNotice>
            </QuestionCreateTopNoticeBox>
          </QuestionCreateTopContainer>
          <QuestionCreateTitleBox>
            <QuestionCreateTitle>
              <QuestionCreateLabelBox>
                <label htmlFor="Askinput" className="LabelTop">
                  Title
                </label>
                <label htmlFor="Askinput" className="LabelMiddle">
                  Be specific and imagine you’re asking a question to another
                  person.
                </label>
                <div className="InputBox">
                  <input
                    id="Askinput"
                    type="AskInput"
                    placeholder="e.g. Is there an R funtion for finding the index of an element in a vector?"
                  ></input>
                </div>
              </QuestionCreateLabelBox>
            </QuestionCreateTitle>
          </QuestionCreateTitleBox>
          <ProblemBox>
            <ProblemContainer>
              <ProblemTextBox>
                <ProblemTextContainer>
                  {/* text */}
                  <ItemBox>
                    <ItemLabel htmlFor="WriteProblem">
                      What are the details of your problem?
                      <p className="ItemLabelParagraph">
                        Introduce the problem and expand on what you put in the
                        title. Minimum 20 characters.
                      </p>
                    </ItemLabel>
                  </ItemBox>
                  {/* text */}
                  <ProblemTextarea id="WriteProblem" />
                  {/* Submit */}
                  <QuestionSubmitBox>
                    <button className="Submit">Review your question</button>
                  </QuestionSubmitBox>
                  {/* Submit */}
                </ProblemTextContainer>
              </ProblemTextBox>
            </ProblemContainer>
          </ProblemBox>
          {/* Discard */}
          <QuestionDiscard>
            <div className="DiscardBox">
              <button className="DiscardButton">Discard draft</button>
            </div>
          </QuestionDiscard>
          {/* Discard */}
        </QuestionCreateContainer>
      </MainBox>
    </QuestionCreateWrap>
  );
};

export default QuestionCreate;
