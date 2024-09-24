export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        {/* Assignment Name */}
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
  
        {/* Assignment Description */}
        <textarea id="wd-description">
          The assignment is available online. Submit a link to the landing page of your web application running on Netlify.
        </textarea>
        <br />
  
        {/* Points */}
        <table>
          <tr style={{ textAlign: 'right', verticalAlign: 'top' }}>
            <td><label htmlFor="wd-points">Points</label></td>
            <td><input id="wd-points" value={100} /></td>
          </tr>
  
          {/* Assignment Group */}
          <tr style={{ textAlign: 'right', verticalAlign: 'top' }}>
            <td><label htmlFor="wd-group">Assignment Group</label></td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
  
          {/* Display Grade As */}
          <tr style={{ textAlign: 'right', verticalAlign: 'top' }}>
            <td><label htmlFor="wd-display-grade-as">Display Grade As</label></td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
              </select>
            </td>
          </tr>
  
          {/* Submission Type */}
          <tr style={{ textAlign: 'right', verticalAlign: 'top' }}>
            <td><label htmlFor="wd-submission-type">Submission Type</label></td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="On Paper">On Paper</option>
              </select>
            </td>
          </tr>
  
          {/* Online Entry Options */}
          <tr style={{ textAlign: 'right', verticalAlign: 'top' }}>
            <td><label htmlFor="wd-text-entry">Online Entry Options</label></td>
            <td>
              <input type="checkbox" id="wd-text-entry" /> Text Entry <br />
              <input type="checkbox" id="wd-website-url" /> Website URL <br />
              <input type="checkbox" id="wd-media-recordings" /> Media Recordings <br />
              <input type="checkbox" id="wd-student-annotation" /> Student Annotation <br />
              <input type="checkbox" id="wd-file-upload" /> File Upload
            </td>
          </tr>
  
          {/* Assign To */}
          <tr style={{ textAlign: 'right', verticalAlign: 'top' }}>
            <td><label htmlFor="wd-assign-to">Assign To</label></td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
  
          {/* Due Date */}
          <tr style={{ textAlign: 'right', verticalAlign: 'top' }}>
            <td><label htmlFor="wd-due-date">Due</label></td>
            <td>
              <input type="date" id="wd-due-date" value="2024-05-13" />
            </td>
          </tr>
  
          {/* Available From */}
          <tr style={{ textAlign: 'right', verticalAlign: 'top' }}>
            <td><label htmlFor="wd-available-from">Available From</label></td>
            <td>
              <input type="date" id="wd-available-from" value="2024-05-06" />
            </td>
          </tr>
  
          {/* Available Until */}
          <tr style={{ textAlign: 'right', verticalAlign: 'top' }}>
            <td><label htmlFor="wd-available-until">Available Until</label></td>
            <td>
              <input type="date" id="wd-available-until" value="2024-05-20" />
            </td>
          </tr>
        </table>
  
        <br />
        {/* Save/Cancel Buttons */}
        <button>Cancel</button> <button>Save</button>
      </div>
    );
  }
  

export {}