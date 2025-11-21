"use client";

import { Package, Truck, Search, MessageSquare, LogIn, UserPlus } from "lucide-react";
import Image from "next/image";

interface LandingPageProps {
  onOpenAuthModal: (mode: "login" | "register") => void;
}

export default function LandingPage({ onOpenAuthModal }: LandingPageProps) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
      {/* Navbar */}
      <nav className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/Logo RiceLink.png"
                  alt="RiceLink Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">RiceLink</h1>
                <p className="text-xs text-gray-400">Kết nối nông dân</p>
              </div>
            </div>

            {/* Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                Trang chủ
              </a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Dịch vụ
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                Giới thiệu
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Liên hệ
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenAuthModal("login")}
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all"
              >
                <LogIn className="w-4 h-4" />
                <span>Đăng nhập</span>
              </button>
              <button
                onClick={() => onOpenAuthModal("register")}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg"
              >
                <UserPlus className="w-4 h-4" />
                <span>Đăng ký</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Giải pháp sấy lúa
                <br />
                <span className="text-green-400">Thông minh & Hiệu quả</span>
              </h1>
              <p className="text-xl text-gray-300">
                Kết nối nông dân với các cơ sở sấy lúa uy tín. Dễ dàng, nhanh chóng, tiết kiệm chi phí.
              </p>
              <button
                onClick={() => onOpenAuthModal("register")}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-2xl hover:scale-105"
              >
                Đăng ký miễn phí
              </button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Logo RiceLink.png"
                alt="RiceLink Banner"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Dịch vụ của chúng tôi</h2>
            <p className="text-xl text-gray-300">
              Giải pháp toàn diện cho nhu cầu sấy và vận chuyển lúa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Sấy lúa */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-green-500 transition-all hover:shadow-xl hover:shadow-green-500/20">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sấy lúa</h3>
              <p className="text-gray-300 mb-6">
                Tìm kiếm và đặt lịch sấy lúa tại các cơ sở uy tín với giá cả phù hợp.
              </p>
              <button
                onClick={() => onOpenAuthModal("login")}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
              >
                Đăng nhập
              </button>
            </div>

            {/* Card 2: Vận chuyển */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Vận chuyển</h3>
              <p className="text-gray-300 mb-6">
                Dịch vụ vận chuyển lúa an toàn, đúng giờ từ ruộng đến cơ sở sấy.
              </p>
              <button
                onClick={() => onOpenAuthModal("login")}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                Đăng nhập
              </button>
            </div>

            {/* Card 3: Theo dõi đơn hàng */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-yellow-500 transition-all hover:shadow-xl hover:shadow-yellow-500/20">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Theo dõi đơn hàng</h3>
              <p className="text-gray-300 mb-6">
                Theo dõi trạng thái đơn hàng realtime, cập nhật liên tục mọi lúc.
              </p>
              <button
                onClick={() => onOpenAuthModal("login")}
                className="w-full px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all"
              >
                Đăng nhập
              </button>
            </div>

            {/* Card 4: Chat hỗ trợ - KHÔNG CẦN ĐĂNG NHẬP */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 border-purple-500 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                MIỄN PHÍ
              </div>
              <div className="w-16 h-16 bg-purple-500/30 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Chat hỗ trợ</h3>
              <p className="text-gray-200 mb-6">
                Trò chuyện với AI để được tư vấn và hỗ trợ 24/7. Không cần đăng nhập!
              </p>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-lg border border-purple-400/50">
                  <span className="text-2xl">💬</span>
                  <span className="text-white font-medium text-sm">
                    Xem góc phải màn hình
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Về RiceLink</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            RiceLink là nền tảng kết nối trực tuyến giữa nông dân và các cơ sở sấy lúa tại Việt Nam.
            Chúng tôi cam kết mang đến giải pháp công nghệ giúp nông dân tiết kiệm thời gian,
            chi phí và nâng cao hiệu quả sản xuất.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <p className="text-gray-300">Cơ sở sấy lúa</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">10K+</div>
              <p className="text-gray-300">Nông dân tin dùng</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50K+</div>
              <p className="text-gray-300">Đơn hàng thành công</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Liên hệ với chúng tôi</h2>
          <p className="text-xl text-gray-300 mb-8">
            Bạn có câu hỏi? Chúng tôi luôn sẵn sàng hỗ trợ!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <p className="text-gray-400 mb-2">Email</p>
              <p className="text-white font-semibold">support@ricelink.vn</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <p className="text-gray-400 mb-2">Điện thoại</p>
              <p className="text-white font-semibold">1900 xxxx</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <p className="text-gray-400 mb-2">Địa chỉ</p>
              <p className="text-white font-semibold">Đồng Tháp, Việt Nam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">RiceLink</h3>
              <p className="text-gray-400 text-sm">
                Nền tảng kết nối nông dân và cơ sở sấy lúa hàng đầu Việt Nam.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Chính sách</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chính sách hoàn tiền</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tuyển dụng</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Trung tâm hỗ trợ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn sử dụng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 RiceLink. All rights reserved. Made with ❤️ in Đồng Tháp, Việt Nam</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

