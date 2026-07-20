import React, { useState } from 'react';

// --- DATA ---
const TEACHERS_DATA = [
  { id: 1, name: "Niranjan", phone: "917892913588" },
  { id: 2, name: "Niranjan", phone: "917676394414"  },
  { id: 3, name: "Sita Sharma", phone: "919876543212" },
  { id: 4, name: "Amit Patel", phone: "919876543213" },
  { id: 5, name: "Priya Singh", phone: "919876543214" },
  { id: 6, name: "Vikram Rao", phone: "919876543215" },
  { id: 7, name: "Anjali Gupta", phone: "919876543216" },
  { id: 8, name: "Sunil Verma", phone: "919876543217" },
  { id: 9, name: "Meena Iyer", phone: "919876543218" },
  { id: 10, name: "Rohan Das", phone: "919876543219" },
  { id: 11, name: "Deepika M.", phone: "919876543220" },
  { id: 12, name: "Karan Johar", phone: "919876543221" },
  { id: 13, name: "Sneha Reddy", phone: "919876543222" },
  { id: 14, name: "Arjun Kapoor", phone: "919876543223" },
  { id: 15, name: "Pooja Hegde", phone: "919876543224" },
  { id: 16, name: "Suresh Raina", phone: "919876543225" },
  { id: 17, name: "Ishita Paul", phone: "919876543226" },
  { id: 18, name: "Manish Mal", phone: "919876543227" },
  { id: 19, name: "Kavita Devi", phone: "919876543228" },
  { id: 20, name: "Rahul Dravid", phone: "919876543229" },
  { id: 21, name: "Zoya Akhtar", phone: "919876543230" },
  { id: 22, name: "Varun Dhawan", phone: "919876543231" },
  { id: 23, name: "Alia Bhatt", phone: "919876543232" },
  { id: 24, name: "Teacher 24", phone: "919876543233" },
  { id: 25, name: "Teacher 25", phone: "919876543234" },
  { id: 26, name: "Teacher 26", phone: "919876543235" },
  { id: 27, name: "Teacher 27", phone: "919876543236" },
  { id: 28, name: "Teacher 28", phone: "919876543237" },
  { id: 29, name: "Teacher 29", phone: "919876543238" },
  { id: 30, name: "Teacher 30", phone: "919876543239" },
  { id: 31, name: "Teacher 31", phone: "919876543240" }
];

const STANDARDS = ["Pre-K", "KG", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];
const SECTIONS = ["A", "B"];
const TIMES = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

export default function App() {
  const [absentId, setAbsentId] = useState("");
  const [std, setStd] = useState("1st");
  const [sec, setSec] = useState("A");
  const [time, setTime] = useState("09:00 AM");
  const [subId, setSubId] = useState("");
  const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]);

  const absentTeacher = TEACHERS_DATA.find(t => t.id === parseInt(absentId));
  const subTeacher = TEACHERS_DATA.find(t => t.id === parseInt(subId));

  const handleDispatch = () => {
    if (!absentId || !subId) {
      alert("Selection Incomplete");
      return;
    }
    const formattedDate = new Date(targetDate).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    const message = `Hello ${subTeacher.name},%0A%0A*ASSIGNMENT NOTICE*%0A*Date:* ${formattedDate}%0A*Class:* ${std}-${sec}%0A*Time:* ${time}%0A%0APlease ensure you attend the class at the assigned time.%0A(Absentee: ${absentTeacher.name})`;
    window.open(`https://wa.me/${subTeacher.phone}?text=${message}`, '_blank');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');

        body { 
          margin: 0; 
          background-color: #0a0a0a;
          background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 40px 40px;
          font-family: 'Playfair Display', serif;
          color: white;
        }
        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .control-card {
          background: #141414;
          border: 1px solid #222;
          border-radius: 8px;
          padding: 2.5rem;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.8);
        }
        .neon-button {
          background: #00ff88;
          color: black;
          font-weight: 800;
          text-transform: uppercase;
          padding: 1.2rem;
          width: 100%;
          border: none;
          letter-spacing: 2px;
          cursor: pointer;
          transition: 0.4s;
        }
        .neon-button:hover { background: #ffffff; transform: translateY(-2px); }
        
        /* Input Field Improvements */
        .input-field {
          width: 100%;
          background: #1e1e1e;
          border: none;
          border-bottom: 1px solid #444;
          color: white;
          padding: 12px 5px;
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          outline: none;
          transition: 0.3s;
          margin-top: 8px; /* THE FIX: Vertical space between Label and Box */
        }
        .input-field:focus { border-bottom-color: #00ff88; }

        /* Labels Improvements */
        label { 
          display: block; 
          font-size: 10px; 
          color: #ffffff; /* Changed to white per request */
          font-weight: bold; 
          text-transform: uppercase; 
          letter-spacing: 2px;
          margin-bottom: 4px; /* Breathing room for the label */
        }

        .status-box {
          border-left: 3px solid #00ff88;
          background: rgba(0, 255, 136, 0.05);
          padding: 1.5rem;
          margin: 2rem 0 1rem 0; /* Spacing between elements */
        }
        
        .grid-layout { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 1.5rem; 
          margin-bottom: 1.5rem; /* Space below the grid row */
        }
        
        /* Group Spacing */
        .input-group {
          margin-bottom: 1.8rem; /* The major vertical gap between sections */
        }

        .header-title { font-size: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: -1px; margin: 0; }
        .header-sub { font-size: 10px; text-transform: uppercase; letter-spacing: 5px; color: #666; margin-top: 15px; }
        .header-line { height: 2px; width: 60px; background: #00ff88; margin: 15px auto; }
      `}</style>

      <div className="app-container">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="header-title">School Management</h1>
          <div className="header-line"></div>
          <p className="header-sub">Designed by Bhoomika Gangadhara</p>
        </div>

        {/* MAIN CARD */}
        <div className="control-card">
          
          {/* 1. DATE SECTION */}
          <div className="input-group">
            <label>Select Date</label>
            <input 
              type="date" 
              className="input-field" 
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
            />
          </div>

          {/* 2. ABSENT TEACHER SECTION */}
          <div className="input-group">
            <label>Absent Personnel</label>
            <select className="input-field" value={absentId} onChange={(e) => setAbsentId(e.target.value)}>
              <option value="" className="text-black">-- Select Teacher --</option>
              {TEACHERS_DATA.map(t => <option key={t.id} value={t.id} className="text-black">{t.name}</option>)}
            </select>
          </div>

          {/* 3. STANDARD & SECTION GROUP */}
          <div className="grid-layout">
            <div className="input-group" style={{ marginBottom: 0 }}>
              <label>Standard</label>
              <select className="input-field" value={std} onChange={(e) => setStd(e.target.value)}>
                <option value="" className="text-black">-- Select Standard --</option>
                {STANDARDS.map(s => <option key={s} value={s} className="text-black">{s}</option>)}
              </select>

            </div>
            <div className="input-group" style={{ marginBottom: 0 }}>
             <label>Section</label>
              <select className="input-field" value={sec} onChange={(e) => setSec(e.target.value)}>
                <option value="" className="text-black">-- Select Section --</option>
                {SECTIONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          {/* 4. SCHEDULED TIME SECTION */}
          <div className="input-group">
            <label>Scheduled Time</label>
            <select className="input-field" value={time} onChange={(e) => setTime(e.target.value)}>
              <option value="" className="text-black">-- Select Scheduled Time --</option>
              {TIMES.map(t => <option key={t} value={t} className="text-black">{t}</option>)}
            </select>
          </div>

          {/* 5. SUBSTITUTE SECTION */}
          <div className="input-group">
            <label>Assign Substitute</label>
            <select className="input-field" value={subId} onChange={(e) => setSubId(e.target.value)}>
              <option value="" className="text-black">-- Select Teacher --</option>
              {TEACHERS_DATA.map(t => <option key={t.id} value={t.id} className="text-black">{t.name}</option>)}
            </select>
          </div>

          {/* STATUS BOX */}
          <div className="status-box">
            <p className="text-[10px] text-[#00ff88] font-bold uppercase mb-2">Assignment Preview</p>
            <p className="text-xs text-white italic opacity-80">
              {absentTeacher 
                ? `Ready: ${subTeacher?.name || '...'} for ${std}-${sec} on ${targetDate}.`
                : "Awaiting selection..."}
            </p>
          </div>

          {/* BUTTON */}
          <button onClick={handleDispatch} className="neon-button">
            Dispatch WhatsApp Notice
          </button>

        </div>

        {/* FOOTER */}
        <div className="text-center mt-12">
          <p className="text-[9px] tracking-[0.5em] text-gray-600 uppercase font-bold">The Professional Substitution System</p>
          <p className="text-[10px] text-[#00ff88] font-medium mt-2">Developed by Bhoomika Gangadhara</p>
        </div>

      </div>
    </>
  );
}