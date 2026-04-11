import { CalendarDays, MapPin, Upload, CheckCircle, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import PreviewModal from '../../components/Common/PreviewModal';
import { useState, useRef } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    visitorName: '',
    businessName: '',
    visitorAddress: '',
    mobileNo: '',
    email: '',
    proofType: '',
    reasonForVisit: ''
  });
  const [showPreview, setShowPreview] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const submitData = new FormData();
    submitData.append("siteId", "ParekheTradeMarket02");
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });
    if (file) {
      submitData.append("proofFile", file);
    }

    try {
      const response = await fetch("http://localhost:5000/api/appointment", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Failed to book appointment. Please try again.');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const previewFields = [
    { key: 'visitorName', label: 'Visitor Name' },
    { key: 'businessName', label: 'Business Name' },
    { key: 'visitorAddress', label: 'Visitor Address' },
    { key: 'mobileNo', label: 'Mobile No.' },
    { key: 'email', label: 'Email Id' },
    { key: 'proofType', label: 'Proof Type' },
    { key: 'reasonForVisit', label: 'Reason for Visit' },
  ];

  const inputClass = "w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all text-sm font-semibold placeholder:text-slate-400";
  const labelClass = "block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 ml-1";

  return (
    <div className="py-20 bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 w-full">
        <div className="lg:col-span-2 bg-blue-900 p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tighter uppercase">Visit Us</h2>
            <p className="text-blue-200 font-medium mb-10 leading-relaxed">
              Schedule a visit to our center in Hyderabad. Please book your appointment 24 hours in advance.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-blue-400" />
                <div>
                  <p className="text-xs font-black uppercase text-blue-300 mb-1">Location</p>
                  <p className="font-bold">Hyderabad, TG, India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-blue-800">
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Official Webmail</p>
            <p className="font-bold text-lg">appointment@parekhtrade.com</p>
          </div>
        </div>

        <div className="lg:col-span-3 p-12 md:p-16">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Appointment Booked</h3>
              <p className="text-slate-500 font-medium">Your request for appointment has been submitted successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-8">Book Appointment</h3>

              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border-l-4 border-red-500 mb-4">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Name of the Visitor *</label>
                  <input type="text" name="visitorName" required value={formData.visitorName} onChange={handleChange} className={inputClass} placeholder="Full Name" />
                </div>
                <div>
                  <label className={labelClass}>Name of the Business</label>
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className={inputClass} placeholder="Business Name" />
                </div>
              </div>

              <div>
                <label className={labelClass}>Visitor Address with Pin code *</label>
                <input type="text" name="visitorAddress" required value={formData.visitorAddress} onChange={handleChange} className={inputClass} placeholder="Complete Address" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Mobile No. *</label>
                  <input type="tel" name="mobileNo" required value={formData.mobileNo} onChange={handleChange} className={inputClass} placeholder="+91" />
                </div>
                <div>
                  <label className={labelClass}>Email Id *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="email@address" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Upload Residential / Business Proof</label>
                  <label className="flex flex-col items-center justify-center w-full h-[54px] bg-slate-50 border border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                      <Upload size={16} /> {file ? file.name : 'Upload Proof'}
                    </div>
                    <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
                  </label>
                </div>
                <div>
                  <label className={labelClass}>Option (Proof Type) *</label>
                  <select name="proofType" required value={formData.proofType} onChange={handleChange} className={inputClass}>
                    <option value="">Select Option</option>
                    <option value="Aadhaar Card">Aadhaar Card</option>
                    <option value="ECI Card">ECI Card</option>
                    <option value="DL">DL</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>Describe the reason for Visit *</label>
                <textarea name="reasonForVisit" required value={formData.reasonForVisit} onChange={handleChange} placeholder="Purpose of Meeting" className={`${inputClass} h-28 resize-none`}></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="flex-1 py-5 border-2 border-slate-900 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <Eye size={18} /> Preview
                </button>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={loading}
                  className="flex-[2] py-5 bg-blue-600 text-white font-black rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Confirm Request"} {!loading && <CalendarDays size={18} />}
                </motion.button>
              </div>

              <PreviewModal
                isOpen={showPreview}
                onClose={() => setShowPreview(false)}
                data={formData}
                fields={previewFields}
                onConfirm={() => handleSubmit({ preventDefault: () => { } })}
                loading={loading}
                title="Appointment Request Review"
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;