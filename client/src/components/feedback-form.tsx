import { useFormik } from "formik";
import * as Yup from "yup";
import Container from "./shared/container";
import { FormField, FormInput, FormLabel, FormMessage, FormTextarea } from "./shared/form";
import { cn } from "../helpers/utils";
import { Button } from "./shared/button";
import { CategoryButton } from "./shared/category-button";
import { feedbackCategories } from "../constants/feedbak-categories";
import { useEffect } from "react";
import useFeedbacksStore from "../hooks/use-feedbacks-store";

const schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
})


interface FeedbackFormProps {
  className?: string
}

function FeedbackForm({ className }: FeedbackFormProps) {
  const { isLoading, isPending, error, selectedFeedback, mode, addFeedback, updateFeedback } = useFeedbacksStore()
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: schema,
    onSubmit: async (values) => {
      if (mode === "create") {
        await addFeedback(values);
      } else if (mode === "update") {
        if (!selectedFeedback) {
          return;
        }
        await updateFeedback(selectedFeedback._id, values);
      }
      formik.resetForm();
    }
  })




  useEffect(() => {
    if (mode === "update") {
      formik.setValues({
        title: selectedFeedback?.title || "",
        category: selectedFeedback?.category || "",
        description: selectedFeedback?.description || "",
      })
    }
  }, [mode])


  return (
    <form onSubmit={formik.handleSubmit} className={cn("w-full", className!)} >
      <Container className="bg-stone-50 dark:bg-stone-900 flex flex-col gap-4 p-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">Submit Feedback</h1>
          <p className="text-sm">Share your thoughts, issues and suggestions.</p>
        </div>

        {mode === "update" && (
          <p className="text-sm text-stone-600 dark:text-stone-400">You can update your feedback here.</p>
        )}

        {mode === "create" && (
          <p className="text-sm text-stone-600 dark:text-stone-400">You can submit a new feedback here.</p>
        )}

        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        )}

        <FormField>
          <FormLabel htmlFor="title">Title</FormLabel>
          <FormInput id="title" {...formik.getFieldProps("title")} invalid={formik.touched.title && formik.errors.title !== undefined} />
          {formik.touched.title && formik.errors.title && (
            <FormMessage>{formik.errors.title}</FormMessage>
          )}
        </FormField>

        <FormField>
          <FormLabel className="mb-2">Category</FormLabel>
          <div className="flex flex-wrap gap-2">
            {feedbackCategories.map((category) => (
              <CategoryButton
                key={category.value}
                label={category.label}
                icon={category.icon}
                selected={formik.values.category === category.value}
                onSelect={() => formik.setFieldValue("category", category.value)}
              />
            ))}
          </div>
          {formik.touched.category && formik.errors.category && (
            <FormMessage>{formik.errors.category}</FormMessage>
          )}
        </FormField>

        <FormField>
          <FormLabel htmlFor="description">Description</FormLabel>
          <FormTextarea id="description" {...formik.getFieldProps("description")} invalid={formik.touched.description && formik.errors.description !== undefined} rows={10} className="resize-none" />
          {formik.touched.description && formik.errors.description && (
            <FormMessage>{formik.errors.description}</FormMessage>
          )}
        </FormField>

        <div className="flex items-center justify-end">
          <Button type="submit" loading={isPending} disabled={isLoading}>Submit</Button>
        </div>
      </Container>
    </form>
  )
}

export default FeedbackForm