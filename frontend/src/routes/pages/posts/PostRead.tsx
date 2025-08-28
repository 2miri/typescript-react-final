import { useState } from "react";
import { CalendarDays, Trash2, Pencil, Eye } from "lucide-react";
import AdBanner from "../../../components/common/AdBanner";
import PostGrid from "../../../components/post/PostGrid";
import CommentForm from "../../../components/comment/CommentForm";
import CommentComponent from "../../../components/comment/CommentComponent";

export default function PostRead() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  // 게시글이 없으면
  // return (
  //   <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
  //     <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
  //     <p className="text-gray-400">
  //       The post you're looking for doesn't exist.
  //     </p>
  //   </div>
  // );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-6">
          <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-md">
            Technology
          </span>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Pencil className="w-4 h-4" />
              Edit
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>

        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-6">
          The Impact of Technology on the Workplace: How Technology Is Changing
        </h1>

        <div className="flex items-center gap-6 mb-8">
          <div className="flex items-center">
            <img
              src={
                "https://gravatar.com/avatar/42b0d0e8377b33f970e9eeded0cb5a61?d=identicon"
              }
              alt={"Jason Francisco"}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-white font-medium">{"Jason Francisco"}</p>
              <div className="flex items-center text-sm text-gray-400">
                <CalendarDays className="h-4 w-4 mr-1" />
                <span>{"2023-03-15"}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <Eye className="h-4 w-4 mr-1" />
            <span>3</span>
          </div>
        </div>

        <div className="mb-8">
          <img
            src={
              "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={"Post Image"}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12 text-white text-lg">
          <p>
            The way we work is constantly evolving, and technology is playing an
            increasingly important role in shaping the modern workplace. From
            remote work capabilities to artificial intelligence and automation,
            technological advancements are transforming how we collaborate,
            communicate, and complete tasks.
          </p>

          <h2>Remote Work Revolution</h2>
          <p>
            One of the most significant changes in recent years has been the
            shift towards remote work. Cloud computing, video conferencing
            tools, and project management software have made it possible for
            teams to collaborate effectively from anywhere in the world. This
            transformation has led to increased flexibility, reduced commuting
            time, and improved work-life balance for many employees.
          </p>

          <h2>Artificial Intelligence and Automation</h2>
          <p>
            AI and automation are streamlining workflows and handling repetitive
            tasks, allowing workers to focus on more strategic and creative
            aspects of their jobs. From chatbots handling customer service
            inquiries to machine learning algorithms analyzing data patterns,
            these technologies are becoming integral to many business
            operations.
          </p>

          <h2>Digital Communication and Collaboration</h2>
          <p>
            Modern workplace communication has evolved beyond email to include
            instant messaging, virtual meetings, and collaborative document
            editing. These tools have made it easier for teams to stay connected
            and work together in real-time, regardless of their physical
            location.
          </p>

          <h2>Cybersecurity Challenges</h2>
          <p>
            As technology becomes more prevalent in the workplace, cybersecurity
            has become a critical concern. Organizations must invest in robust
            security measures to protect sensitive data and maintain privacy in
            an increasingly digital environment.
          </p>

          <h2>The Future of Work</h2>
          <p>
            Looking ahead, emerging technologies like virtual reality, augmented
            reality, and the metaverse may further transform how we work and
            interact with colleagues. These innovations promise to create more
            immersive and engaging work experiences while continuing to break
            down geographical barriers.
          </p>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-slate-800 p-6 rounded-lg max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-white mb-4">Delete Post</h3>
              <p className="text-gray-300 mb-6">
                Are you sure you want to delete this post? This action cannot be
                undone.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div className="border-t border-slate-700 pt-8 mt-8">
          <h2 className="text-2xl font-bold text-white mb-8">Comments</h2>

          <CommentForm />

          <div className="mt-8 space-y-6">
            <CommentComponent />
          </div>
        </div>

        <div className="my-12">
          <AdBanner />
        </div>

        <div className="mb-12">
          <PostGrid />
        </div>
      </div>
    </div>
  );
}
