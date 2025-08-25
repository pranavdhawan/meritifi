import { Button } from "@/components/ui/button"
import { Search, Play, Star, MapPin, Clock, Users, BookOpen, GraduationCap, ChevronRight, ArrowRight, Youtube, Instagram, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <span className="text-3xl font-bold text-gray-900 font-balsamiq">meritifi</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">About Us</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Teacher Dashboard</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Student Dashboard</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Magazine</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">College Hunt</a>
            </nav>

            {/* Login Button */}
            <button className="px-6 py-2 border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-400 rounded text-white font-semibold hover:opacity-90 transition-opacity">
              Log In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-balsamiq">
                Ever Wondered About Wonder? The Kind That Doesn't Stop At Classrooms And Time-tables.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Meritifi is for all those who want a little more than enough.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 hover:from-yellow-500 hover:via-orange-500 hover:to-yellow-400 text-black border-2 border-yellow-400">
                  Find a Teacher
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-purple-500 text-purple-600 hover:bg-purple-50">
                  Start Teaching
                </Button>
              </div>
              
              <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 hover:from-cyan-500 hover:via-blue-500 hover:to-cyan-400 text-white border-2 border-cyan-400">
                Start a Chat
              </Button>
            </div>

            {/* Right Content - Decorative Elements */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">📚</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 -left-10 w-32 h-32 bg-red-400 rounded-full shadow-lg flex items-center justify-center animate-float">
                <Search className="w-12 h-12 text-white" />
              </div>
              
              <div className="absolute bottom-20 -right-10 w-36 h-36 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <Play className="w-16 h-16 text-white" />
              </div>
              
              <div className="absolute bottom-10 left-20 w-28 h-28 bg-purple-500 rounded-full shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-balsamiq">
            How It Works
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Student Flow */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 font-plus-jakarta">Search for your subjects</h3>
                    <div className="w-px h-16 bg-gray-300 ml-6 mt-2"></div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 font-plus-jakarta">Connect with expert tutors</h3>
                    <div className="w-px h-16 bg-gray-300 ml-6 mt-2"></div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 font-plus-jakarta">Learn anytime anywhere</h3>
                  </div>
                </div>
              </div>
              
              {/* Student Image */}
              <div className="mt-8">
                <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-300 to-purple-400 flex items-center justify-center">
                    <span className="text-white text-8xl">👨‍🎓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher Flow */}
            <div className="bg-yellow-50 rounded-2xl p-8 shadow-lg">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 font-plus-jakarta">Register yourself to teach</h3>
                    <div className="w-px h-16 bg-gray-300 ml-6 mt-2"></div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 font-plus-jakarta">Connect with interested students</h3>
                    <div className="w-px h-16 bg-gray-300 ml-6 mt-2"></div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 font-plus-jakarta">Earn through classes</h3>
                  </div>
                </div>
              </div>
              
              {/* Teacher Image */}
              <div className="mt-8">
                <div className="w-full h-80 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center">
                    <span className="text-white text-8xl">👩‍🏫</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-balsamiq">
            Stay Organized, Stay Wondering
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Student Dashboard */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Explore Subjects, tutors & colleges
                </h3>
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 hover:from-yellow-500 hover:via-orange-500 hover:to-yellow-400 text-black border-2 border-yellow-400">
                  Student Dashboard
                </Button>
              </div>
              
              {/* Teacher Dashboard */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Manage classes, students & earnings
                </h3>
                <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-500 via-blue-500 to-purple-400 hover:from-purple-600 hover:via-blue-600 hover:to-purple-500 text-white border-2 border-purple-500">
                  Teacher Dashboard
                </Button>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center">
                    <span className="text-white text-8xl">💻</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 -left-10 w-32 h-32 bg-red-400 rounded-full shadow-lg flex items-center justify-center animate-float">
                <Search className="w-12 h-12 text-white" />
              </div>
              
              <div className="absolute bottom-20 -right-10 w-36 h-36 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <Play className="w-16 h-16 text-white" />
              </div>
              
              <div className="absolute bottom-10 left-20 w-28 h-28 bg-purple-500 rounded-full shadow-lg flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Tutors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-balsamiq">
            Our Best Teachers, Your Best Mentors
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tutor Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              {/* Profile Image */}
              <div className="w-full h-48 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl mb-4 flex items-center justify-center">
                <span className="text-6xl">👨‍🏫</span>
              </div>
              
              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-plus-jakarta">Ashish Chanchalani</h3>
              
              {/* Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-700 font-plus-jakarta">4.5</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-700 font-plus-jakarta">Hybrid</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-gray-700 font-plus-jakarta">South Delhi</span>
                </div>
              </div>
              
              {/* Subjects & Experience */}
              <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-700 font-plus-jakarta">Sub: Physics & Maths</p>
                  <p className="text-sm text-gray-700 font-plus-jakarta">Classes: 1st-12th</p>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-700 font-plus-jakarta">Exp: 7 Years</p>
                  <p className="text-sm font-semibold text-green-600 font-plus-jakarta">₹ 20/min</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="flex-1 border-pink-400 text-pink-600 hover:bg-pink-50">
                  Chat
                </Button>
                <Button size="sm" className="flex-1 bg-pink-500 hover:bg-pink-600 text-white">
                  View
                </Button>
              </div>
            </div>

            {/* Tutor Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              {/* Profile Image */}
              <div className="w-full h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl mb-4 flex items-center justify-center">
                <span className="text-6xl">👩‍🏫</span>
              </div>
              
              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-plus-jakarta">Priya Sharma</h3>
              
              {/* Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-700 font-plus-jakarta">4.8</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-700 font-plus-jakarta">Online</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-gray-700 font-plus-jakarta">Mumbai</span>
                </div>
              </div>
              
              {/* Subjects & Experience */}
              <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-700 font-plus-jakarta">Sub: Chemistry & Biology</p>
                  <p className="text-sm text-gray-700 font-plus-jakarta">Classes: 9th-12th</p>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-700 font-plus-jakarta">Exp: 5 Years</p>
                  <p className="text-sm font-semibold text-green-600 font-plus-jakarta">₹ 25/min</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="flex-1 border-orange-400 text-orange-600 hover:bg-orange-50">
                  Chat
                </Button>
                <Button size="sm" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
                  View
                </Button>
              </div>
            </div>

            {/* Tutor Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              {/* Profile Image */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl mb-4 flex items-center justify-center">
                <span className="text-6xl">👨‍🏫</span>
              </div>
              
              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-plus-jakarta">Rahul Verma</h3>
              
              {/* Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-700 font-plus-jakarta">4.6</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-700 font-plus-jakarta">Offline</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-gray-700 font-plus-jakarta">Bangalore</span>
                </div>
              </div>
              
              {/* Subjects & Experience */}
              <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-700 font-plus-jakarta">Sub: Computer Science</p>
                  <p className="text-sm text-gray-700 font-plus-jakarta">Classes: 6th-12th</p>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-700 font-plus-jakarta">Exp: 8 Years</p>
                  <p className="text-sm font-semibold text-green-600 font-plus-jakarta">₹ 30/min</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="flex-1 border-blue-400 text-blue-600 hover:bg-blue-50">
                  Chat
                </Button>
                <Button size="sm" className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-balsamiq">
            Meritifi Magazine
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-purple-300 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-4xl">📚</span>
              </div>
              <div className="space-y-3">
                <span className="text-sm text-purple-600 font-medium font-poppins">ARTICLE</span>
                <h3 className="text-lg font-bold text-gray-900 font-poppins">
                  Offline or Online: What Works Best for Today's Learners?
                </h3>
                <p className="text-sm text-gray-600">
                  Explore our blogs and discover the future of education
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-medium font-poppins">Read more</span>
                  <ChevronRight className="w-4 h-4 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-full h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-4xl">🧠</span>
              </div>
              <div className="space-y-3">
                <span className="text-sm text-orange-600 font-medium font-poppins">ARTICLE</span>
                <h3 className="text-lg font-bold text-gray-900 font-poppins">
                  Smart Study Habits for Gen-Z Learners
                </h3>
                <p className="text-sm text-gray-600">
                  Bite-sized learning, productivity apps, and AI reminders—here's how today's students are getting more done in less time.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-600 font-medium font-poppins">Read more</span>
                  <ChevronRight className="w-4 h-4 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-full h-48 bg-gradient-to-br from-green-200 to-green-300 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-4xl">🎯</span>
              </div>
              <div className="space-y-3">
                <span className="text-sm text-green-600 font-medium font-poppins">ARTICLE</span>
                <h3 className="text-lg font-bold text-gray-900 font-poppins">
                  The Future of Hybrid Education
                </h3>
                <p className="text-sm text-gray-600">
                  Flexibility is key, but the hybrid model might just be the future of effective education.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium font-poppins">Read more</span>
                  <ChevronRight className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-16 bg-pink-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-8">
              <a href="#" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <Instagram className="w-6 h-6" />
                <span className="font-medium">Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-500">
                <Twitter className="w-6 h-6" />
                <span className="font-medium">Twitter</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-red-600 hover:text-red-700">
                <Youtube className="w-6 h-6" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-balsamiq">
            When you Make Merit Yours
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-700 mb-4 font-inter">
                "Headspace gives me a slice of the day that's just for me."
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900 font-inter">Nadien, New Mexico</p>
                <p className="text-gray-600 font-inter">on prioritizing self-care</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-700 mb-4 font-inter">
                "The stress and loneliness courses taught me how to comfort myself."
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900 font-inter">Alicia, Canada</p>
                <p className="text-gray-600 font-inter">on managing the trauma of sexual assault</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-700 mb-4 font-inter">
                "Your app brings so much peace and tolerance to our home."
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900 font-inter">Rachael, UK</p>
                <p className="text-gray-600 font-inter">on meditation's positive effect on family life</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Search Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-balsamiq">
            Find Your Perfect College
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* Search Fields */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">College/University</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select college type</option>
                      <option>Public University</option>
                      <option>Private University</option>
                      <option>Community College</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Course Type</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select course type</option>
                      <option>Engineering</option>
                      <option>Medical</option>
                      <option>Arts</option>
                      <option>Commerce</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Stream</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select stream</option>
                      <option>Science</option>
                      <option>Arts</option>
                      <option>Commerce</option>
                    </select>
                  </div>
                </div>
                
                {/* Search Button */}
                <Button size="lg" className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 hover:from-yellow-500 hover:via-orange-500 hover:to-yellow-400 text-black border-2 border-yellow-400">
                  Search Now
                </Button>
              </div>
            </div>
            
            {/* Info Card */}
            <div className="mt-8 bg-blue-50 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Keep Your Learning Streak Strong!
              </h3>
              <p className="text-gray-700">
                Search, compare and choose colleges best-suited for You.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-5 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">M</span>
                </div>
                <span className="text-2xl font-bold font-balsamiq">meritifi</span>
              </div>
              <p className="text-gray-300">
                Empowering students and teachers to achieve their full potential through innovative education solutions.
              </p>
            </div>

            {/* Information Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-balsamiq">Information</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Teacher Dashboard</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Student Dashboard</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Magazine</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">College Hunt</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-balsamiq">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold font-balsamiq">Contact Us</h3>
              <div className="space-y-2">
                <p className="text-gray-300">+1 (999) 999-99-99</p>
                <p className="text-gray-300">info@meritifi.com</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 — Copyright Meritifi. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
