// ===== TeacherHomePage.tsx =====
import { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Rocket, 
  PenTool, 
  Upload, 
  BarChart3, 
  Shield,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function TeacherHomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [teacherName] = useState("Dr. Sarah Johnson");

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDashboardClick = () => {
    navigate('/teacher/dashboard');
  };

  const features = [
    {
      icon: PenTool,
      title: "Create Exams",
      description: "Build & assign tests to students",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Upload,
      title: "Upload Notes",
      description: "Share important study resources",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Track Responses",
      description: "Monitor student submissions & feedback",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1039] relative">
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <GraduationCap className="text-white w-12 h-12 mr-3" />
            <h1 className="text-2xl font-bold text-white">Learnex</h1>
          </div>
        </div>

        {/* Welcome Banner */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Welcome, {teacherName}!
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light max-w-2xl mx-auto leading-relaxed">
            Empower students. Shape futures. Start here.
          </p>
        </div>

        {/* Center CTA Button */}
        <div className={`text-center mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={handleDashboardClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Rocket className="w-6 h-6 mr-3 relative z-10 group-hover:animate-pulse" />
            <span className="relative z-10">Let's Go to Dashboard</span>
            <ChevronRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Features Section */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-2 text-blue-300">
            <Shield className="w-5 h-5" />
            <span className="text-sm">Secure access – Learnex Teacher Panel</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherHomePage;


// ===== TeacherProfilePage.tsx =====
import { useState } from 'react';
import { Edit, Save, X, Camera, Mail, User, BookOpen, FileText, ClipboardList, FileCheck, Award, Calendar } from 'lucide-react';

const TeacherProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@learnex.com',
    bio: 'Passionate educator with over 8 years of experience in web development and computer science. I believe in making complex concepts simple and accessible to all learners.',
    specialization: 'Full-Stack Web Development',
    experience: '8 years',
    education: 'Ph.D. in Computer Science',
    location: 'San Francisco, CA',
    website: 'https://sarahjohnson.dev',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    github: 'https://github.com/sarahjohnson'
  });

  const [stats] = useState({
    totalExams: 15,
    totalNotes: 28,
    totalStudents: 145,
    averageRating: 4.8,
    totalHours: 320,
    completionRate: 92
  });

  const [achievements] = useState([
    { title: 'Top Educator 2023', description: 'Recognized for outstanding teaching performance', date: '2023-12-01' },
    { title: 'Innovation in Teaching', description: 'Award for creative teaching methodologies', date: '2023-08-15' },
    { title: '100+ Students Milestone', description: 'Successfully taught over 100 students', date: '2023-06-01' }
  ]);

  const [recentActivity] = useState([
    { type: 'exam', title: 'Created "Advanced React Patterns" exam', date: '2024-01-22' },
    { type: 'note', title: 'Uploaded "JavaScript ES2024 Features" notes', date: '2024-01-20' },
    { type: 'review', title: 'Reviewed 15 quiz submissions', date: '2024-01-18' },
    { type: 'announcement', title: 'Published "Week 5 Guidelines" announcement', date: '2024-01-15' }
  ]);

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'exam': return <FileCheck className="text-blue-600" size={16} />;
      case 'note': return <FileText className="text-green-600" size={16} />;
      case 'review': return <ClipboardList className="text-purple-600" size={16} />;
      case 'announcement': return <BookOpen className="text-orange-600" size={16} />;
      default: return <User className="text-gray-600" size={16} />;
    }
  };

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-[#14213D] mb-2">Teacher Profile</h1>
              <p className="text-gray-600">Manage your profile information and view your teaching statistics</p>
            </div>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 bg-[#14213D] text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Edit size={16} />
                <span>Edit Profile</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Save size={16} />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <X size={16} />
                  <span>Cancel</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-[#14213D] mb-6">Profile Information</h2>

              {/* Profile Photo */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-[#14213D] rounded-full flex items-center justify-center">
                    <User className="text-white" size={32} />
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-50 transition-colors">
                      <Camera size={16} className="text-gray-600" />
                    </button>
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-[#14213D]">{profileData.name}</h3>
                  <p className="text-gray-600">{profileData.specialization}</p>
                  <div className="flex items-center mt-1">
                    <Mail size={16} className="text-gray-400 mr-1" />
                    <span className="text-gray-600 text-sm">{profileData.email}</span>
                  </div>
                </div>
              </div>

              {/* Profile Form */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14213D] focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg">{profileData.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14213D] focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.specialization}
                      onChange={(e) => setProfileData({ ...profileData, specialization: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14213D] focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg">{profileData.specialization}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.experience}
                      onChange={(e) => setProfileData({ ...profileData, experience: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14213D] focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg">{profileData.experience}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.education}
                      onChange={(e) => setProfileData({ ...profileData, education: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14213D] focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg">{profileData.education}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14213D] focus:border-transparent"
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg">{profileData.location}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14213D] focus:border-transparent"
                  />
                ) : (
                  <p className="p-3 bg-gray-50 rounded-lg">{profileData.bio}</p>
                )}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-[#14213D] mb-4">Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Award className="text-yellow-600 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-800">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(achievement.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-[#14213D] mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Sidebar */}
          <div className="space-y-6">
            {/* Stats Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-[#14213D] mb-4">Teaching Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <FileCheck className="text-blue-600" size={16} />
                    </div>
                    <span className="text-sm text-gray-600">Total Exams</span>
                  </div>
                  <span className="font-semibold text-[#14213D]">{stats.totalExams}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <FileText className="text-green-600" size={16} />
                    </div>
                    <span className="text-sm text-gray-600">Notes Uploaded</span>
                  </div>
                  <span className="font-semibold text-[#14213D]">{stats.totalNotes}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <User className="text-purple-600" size={16} />
                    </div>
                    <span className="text-sm text-gray-600">Students Taught</span>
                  </div>
                  <span className="font-semibold text-[#14213D]">{stats.totalStudents}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <Award className="text-yellow-600" size={16} />
                    </div>
                    <span className="text-sm text-gray-600">Average Rating</span>
                  </div>
                  <span className="font-semibold text-[#14213D]">{stats.averageRating}/5.0</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Calendar className="text-orange-600" size={16} />
                    </div>
                    <span className="text-sm text-gray-600">Teaching Hours</span>
                  </div>
                  <span className="font-semibold text-[#14213D]">{stats.totalHours}h</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                      <ClipboardList className="text-indigo-600" size={16} />
                    </div>
                    <span className="text-sm text-gray-600">Completion Rate</span>
                  </div>
                  <span className="font-semibold text-[#14213D]">{stats.completionRate}%</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-[#14213D] mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  Download Teaching Report
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  Export Student Data
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  View Feedback Summary
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  Change Password
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfilePage;
