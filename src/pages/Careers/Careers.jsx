import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Globe, ShieldCheck, HelpCircle } from 'lucide-react';
import { careerApi } from '../../utils/api';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = 'ParekheTradeMarket02';
  const applicationEmail = 'shaibse@gmail.com';

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await careerApi.getJobs(siteId);
        if (response.data && response.data.success) {
          setJobs(response.data.data || []);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = (job) => {
    const email = job.email || job.contactEmail || applicationEmail;
    window.location.href = `mailto:${email}?subject=Application for ${job.title} - ${siteId}`;
  };

  return (
    <div className=" bg-[#f8fafc] font-sans relative overflow-hidden">

      {/* --- HERO HEADER (Industrial Dark) --- */}
      {/* <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-6 leading-none">
              Career <span className="text-blue-500">Portal</span>
            </h1>

          </motion.div>
        </div>
      </section> */}

      {/* --- JOB LISTINGS / FALLBACK --- */}
      <section className=" max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">

          {!loading && jobs.length > 0 && (
            <div className="hidden md:block text-xs font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-lg">
              {jobs.length} Positions Active
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : jobs.length > 0 ? (
          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <motion.div
                key={job._id || idx}
                whileHover={{ x: 10 }}
                className="p-8 bg-white border border-slate-100 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group cursor-pointer"
              >
                <div className="flex gap-6 items-center w-full">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1 block">{job.department || "General"}</span>
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight tracking-tight group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-3">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <MapPin size={14} /> {job.location || "Remote"}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <Clock size={14} /> {job.type || "Full-Time"}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleApply(job)}
                  className="w-full md:w-auto bg-slate-950 text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-slate-900/20 hover:bg-blue-600 hover:shadow-blue-200 transition-all flex items-center justify-center gap-2 group-hover:scale-105 active:scale-95"
                >
                  Apply Now <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          /* --- FALLBACK FOR NO VACANCY --- */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-900/5"
          >
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle size={40} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter mb-4">
              ( At present, No Vacancy )
            </h3>
            {/* <p className="text-slate-500 font-medium max-w-md mx-auto">
              Building our next wave of opportunities. Join our digital textile revolution soon.
            </p> */}
          </motion.div>
        )}
      </section>


    </div>
  );
};

export default Careers;