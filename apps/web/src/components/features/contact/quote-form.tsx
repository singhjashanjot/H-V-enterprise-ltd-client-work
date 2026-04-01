'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@hv/ui';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 2000;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[\d\s()+-]{7,20}$/;

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  fenceType: string;
  projectType: string;
  message: string;
}

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (_data: FormValues) => {
    setSubmitError(false);
    try {
      // Simulate API call — replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/10">
          <CheckCircle className="h-8 w-8 text-primary-container" />
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-on-surface">Quote Request Sent!</h3>
        <p className="mt-2 max-w-md font-body text-sm text-on-surface-variant">
          Thank you for your interest. Our team will review your details and get back to you within 24 hours with a detailed estimate.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 font-body text-sm font-medium text-primary-container underline underline-offset-4 hover:text-primary"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6" noValidate>
      {submitError && (
        <div className="flex items-center gap-3 rounded-lg bg-error/10 p-4">
          <AlertCircle className="h-5 w-5 shrink-0 text-error" />
          <p className="font-body text-sm text-error">
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}

      {/* Name Row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="First Name"
          placeholder="John"
          {...register('firstName', {
            required: 'First name is required',
            maxLength: { value: MAX_FIELD_LENGTH, message: `Max ${MAX_FIELD_LENGTH} characters` },
          })}
          error={errors.firstName?.message}
        />
        <Input
          label="Last Name"
          placeholder="Smith"
          {...register('lastName', {
            required: 'Last name is required',
            maxLength: { value: MAX_FIELD_LENGTH, message: `Max ${MAX_FIELD_LENGTH} characters` },
          })}
          error={errors.lastName?.message}
        />
      </div>

      {/* Contact Row */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          {...register('email', {
            required: 'Email is required',
            pattern: { value: EMAIL_REGEX, message: 'Please enter a valid email address' },
            maxLength: { value: MAX_FIELD_LENGTH, message: `Max ${MAX_FIELD_LENGTH} characters` },
          })}
          error={errors.email?.message}
        />
        <Input
          label="Phone"
          type="tel"
          placeholder="(555) 000-0000"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: { value: PHONE_REGEX, message: 'Please enter a valid phone number' },
          })}
          error={errors.phone?.message}
        />
      </div>

      {/* Location */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Street Address"
          placeholder="123 Main St"
          {...register('address', {
            required: 'Address is required',
            maxLength: { value: MAX_FIELD_LENGTH, message: `Max ${MAX_FIELD_LENGTH} characters` },
          })}
          error={errors.address?.message}
        />
        <Input
          label="City"
          placeholder="Toronto"
          {...register('city', {
            required: 'City is required',
            maxLength: { value: MAX_FIELD_LENGTH, message: `Max ${MAX_FIELD_LENGTH} characters` },
          })}
          error={errors.city?.message}
        />
      </div>

      {/* Project Details */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-xs font-medium uppercase tracking-[0.06em] text-on-surface-variant">
            Fence Type
          </label>
          <select
            {...register('fenceType', { required: 'Please select a fence type' })}
            className="h-12 w-full rounded-none border-0 border-b-2 border-outline-variant/40 bg-surface-container-lowest px-0 pb-2 pt-2 font-body text-base text-on-surface outline-none transition-colors focus:border-primary"
          >
            <option value="">Select fence type</option>
            <option value="cedar">Cedar</option>
            <option value="vinyl">Vinyl</option>
            <option value="aluminum">Aluminum</option>
            <option value="chain-link">Chain Link</option>
            <option value="metal-wood">Metal & Wood</option>
            <option value="composite">Composite</option>
            <option value="ornamental">Ornamental</option>
            <option value="other">Other / Not Sure</option>
          </select>
          {errors.fenceType && (
            <p className="font-body text-xs text-error">{errors.fenceType.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-body text-xs font-medium uppercase tracking-[0.06em] text-on-surface-variant">
            Project Type
          </label>
          <select
            {...register('projectType', { required: 'Please select a project type' })}
            className="h-12 w-full rounded-none border-0 border-b-2 border-outline-variant/40 bg-surface-container-lowest px-0 pb-2 pt-2 font-body text-base text-on-surface outline-none transition-colors focus:border-primary"
          >
            <option value="">Select project type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
          {errors.projectType && (
            <p className="font-body text-xs text-error">{errors.projectType.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="font-body text-xs font-medium uppercase tracking-[0.06em] text-on-surface-variant">
          Project Details
        </label>
        <textarea
          {...register('message', {
            maxLength: { value: MAX_MESSAGE_LENGTH, message: `Max ${MAX_MESSAGE_LENGTH} characters` },
          })}
          rows={4}
          placeholder="Tell us about your project — dimensions, terrain, any special requirements..."
          className="w-full resize-none rounded-none border-0 border-b-2 border-outline-variant/40 bg-surface-container-lowest px-0 pb-2 pt-2 font-body text-base text-on-surface outline-none transition-colors placeholder:text-outline focus:border-primary"
        />
        {errors.message && (
          <p className="font-body text-xs text-error">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="animate-pulse">Sending...</span>
        ) : (
          <>
            Send Quote Request
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
