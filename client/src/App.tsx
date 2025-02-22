import { useEffect } from "react"
import FeedbackForm from "./components/feedback-form"
import FeedbacksList from "./components/feedbacks-list"
import Footer from "./components/footer"
import Header from "./components/header"
import Navbar from "./components/navbar"
import useFeedbacksStore from "./hooks/use-feedbacks-store"
import FeedbacksSearchAndFilter from "./components/feedback-search-and-filter"
import ErrorState from "./components/shared/error-state"
import LoadingState from "./components/shared/loading-state"



function App() {
  const { feedbacks, isLoading, error, fetchFeedbacks } = useFeedbacksStore()




  useEffect(() => {
    fetchFeedbacks();
  }, []);

  if (isLoading) {
    return <LoadingState />
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen mb-12">
        <Header className="mb-12" />
        <FeedbackForm className="mb-12" />
        <FeedbacksSearchAndFilter className="mb-12" />

        {
          error && <ErrorState error={error} />
        }

        {
          feedbacks && (
            <FeedbacksList feedbacks={feedbacks} />
          )
        }
      </div>
      <Footer />
    </>
  )
}

export default App