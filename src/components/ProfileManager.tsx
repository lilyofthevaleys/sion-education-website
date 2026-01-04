import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Upload, X, Check, Camera, ArrowLeft } from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';

export default function ProfileManager({ currentUser, onClose, onSave }) {
  // Store original values to restore on cancel
  const [originalAvatar] = useState(currentUser?.avatar || null);
  const [originalColor] = useState(currentUser?.avatarColor || '#2563EB');
  
  const [selectedAvatar, setSelectedAvatar] = useState(currentUser?.avatar || null);
  const [selectedColor, setSelectedColor] = useState(currentUser?.avatarColor || '#2563EB');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  // Emoji avatar options
  const emojiAvatars = [
    '😊', '😎', '🎓', '🌟', '🎨', '💼', 
    '📚', '🚀', '🔥', '💡', '🎯', '✨',
    '🌈', '🎭', '🏆', '💪', '🌺', '⭐'
  ];

  // Background color options (from your palette)
  const colorOptions = [
    { color: '#2563EB', name: 'Ocean Blue' },
    { color: '#4F46E5', name: 'Indigo' },
    { color: '#7C3AED', name: 'Purple' },
    { color: '#0891B2', name: 'Cyan' },
    { color: '#16A34A', name: 'Green' },
    { color: '#EA580C', name: 'Orange' },
    { color: '#DC2626', name: 'Red' },
    { color: '#8B5CF6', name: 'Violet' }
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setSelectedAvatar('uploaded');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log('handleSave called - saving changes');
    const profileData = {
      avatar: selectedAvatar,
      avatarColor: selectedColor,
      uploadedImage: uploadedImage
    };
    setShowSaveModal(false);
    onSave(profileData);
    onClose();
  };

  const handleCancel = () => {
    console.log('handleCancel called - discarding changes');
    // Restore original values when canceling
    setSelectedAvatar(originalAvatar);
    setSelectedColor(originalColor);
    setUploadedImage(null);
    // Do NOT call onSave - just close
    onClose();
  };

  const handleRemove = () => {
    setSelectedAvatar(null);
    setUploadedImage(null);
    setShowRemoveModal(false);
  };

  const getCurrentAvatar = () => {
    if (selectedAvatar === 'uploaded' && uploadedImage) {
      return (
        <img 
          src={uploadedImage} 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      );
    } else if (selectedAvatar && emojiAvatars.includes(selectedAvatar)) {
      return <span className="text-6xl">{selectedAvatar}</span>;
    } else {
      return <User className="w-16 h-16 text-white/80" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] p-6 rounded-t-3xl z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCancel}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <div>
                <h2 className="font-['Arimo'] text-2xl text-white">Profile Picture</h2>
                <p className="font-['Arimo'] text-sm text-white/80">Customize your avatar</p>
              </div>
            </div>
            <Camera className="w-8 h-8 text-white/80" />
          </div>
        </div>

        <div className="p-8 space-y-8 overflow-y-auto flex-1">
          {/* Current Avatar Preview */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div 
                className="w-40 h-40 rounded-full flex items-center justify-center shadow-2xl overflow-hidden ring-4 ring-white"
                style={{ backgroundColor: selectedColor }}
              >
                {getCurrentAvatar()}
              </div>
              {selectedAvatar && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowRemoveModal(true)}
                  className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-600 transition-all"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              )}
            </motion.div>
            <div className="text-center mt-4">
              <p className="font-['Arimo'] text-lg text-gray-900">{currentUser?.name || 'User Name'}</p>
              <p className="font-['Arimo'] text-sm text-gray-600">{currentUser?.role || 'Role'}</p>
            </div>
          </div>

          {/* Upload Section */}
          <div className="space-y-3">
            <h3 className="font-['Arimo'] text-sm text-gray-700 uppercase tracking-wide">Upload Photo</h3>
            <label className="block">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all"
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="font-['Arimo'] text-gray-700">Click to upload</p>
                <p className="font-['Arimo'] text-sm text-gray-500 mt-1">JPG, PNG or GIF (max 5MB)</p>
              </motion.div>
            </label>
          </div>

          {/* Emoji Avatars */}
          <div className="space-y-3">
            <h3 className="font-['Arimo'] text-sm text-gray-700 uppercase tracking-wide">Choose Avatar</h3>
            <div className="grid grid-cols-6 gap-3">
              {emojiAvatars.map((emoji) => (
                <motion.button
                  key={emoji}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setSelectedAvatar(emoji);
                    setUploadedImage(null);
                  }}
                  className={`aspect-square rounded-2xl flex items-center justify-center text-4xl transition-all shadow-lg ${
                    selectedAvatar === emoji
                      ? 'ring-4 ring-blue-500 bg-blue-50'
                      : 'bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl'
                  }`}
                  style={selectedAvatar === emoji ? { backgroundColor: selectedColor + '20' } : {}}
                >
                  {emoji}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Background Color */}
          <div className="space-y-3">
            <h3 className="font-['Arimo'] text-sm text-gray-700 uppercase tracking-wide">Background Color</h3>
            <div className="grid grid-cols-8 gap-3">
              {colorOptions.map((option) => (
                <motion.button
                  key={option.color}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedColor(option.color)}
                  className={`aspect-square rounded-xl shadow-lg transition-all ${
                    selectedColor === option.color
                      ? 'ring-4 ring-offset-2 ring-gray-900'
                      : 'hover:shadow-xl'
                  }`}
                  style={{ backgroundColor: option.color }}
                  title={option.name}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCancel}
              className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-['Arimo'] hover:bg-gray-200 transition-all shadow-md"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowSaveModal(true)}
              className="flex-1 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] text-white py-4 rounded-2xl font-['Arimo'] hover:shadow-2xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              Save Changes
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Save Confirmation Modal */}
      <ConfirmationModal
        isOpen={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        onConfirm={handleSave}
        title="Save Profile Changes?"
        message="Are you sure you want to update your profile picture?"
        confirmText="Yes, Save"
        confirmColor="from-green-500 to-green-600"
        icon={<Check className="w-6 h-6 text-white" />}
      />

      {/* Remove Confirmation Modal */}
      <ConfirmationModal
        isOpen={showRemoveModal}
        onClose={() => setShowRemoveModal(false)}
        onConfirm={handleRemove}
        title="Remove Profile Picture?"
        message="This will reset your profile picture to the default avatar."
        confirmText="Yes, Remove"
        confirmColor="from-red-500 to-red-600"
        icon={<X className="w-6 h-6 text-white" />}
      />
    </motion.div>
  );
}