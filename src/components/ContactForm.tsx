import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Mail, Send, User } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Voer een geldig emailadres in"),
  subject: z.string().min(5, "Onderwerp moet minimaal 5 karakters bevatten"),
  dateOfBirth: z.string().min(1, "Geboortedatum is verplicht"),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      dateOfBirth: "",
      message: "",
    },
  });

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const age = calculateAge(data.dateOfBirth);
      
      if (age < 18) {
        toast({
          variant: "destructive",
          title: "Leeftijdsbeperking",
          description: "Je moet minimaal 18 jaar oud zijn om een bericht te verzenden.",
        });
        setIsSubmitting(false);
        return;
      }

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Bericht verzonden!",
        description: "Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Er is iets misgegaan",
        description: "Probeer het later opnieuw of neem telefonisch contact op.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Neem contact op
            </h2>
            <p className="text-xl text-muted-foreground">
              Heeft u vragen of wilt u een offerte aanvragen? 
              Vul het formulier in en wij nemen contact met u op.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    Direct contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Telefoon</h4>
                    <p className="text-muted-foreground">+31 6 17038632</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground">info@uranuservices.nl</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Bereikbaarheid</h4>
                    <p className="text-muted-foreground">24/7, inclusief weekenden</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card-hover bg-gradient-accent text-white">
                <CardHeader>
                  <CardTitle>Waarom kiezen voor Uranu Services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-white/90">
                    <li>✓ Gecertificeerde verkeersregelaars</li>
                    <li>✓ 24/7 bereikbaar voor noodgevallen</li>
                    <li>✓ Maatwerk oplossingen</li>
                    <li>✓ Vaste aanspreekpunt</li>
                    <li>✓ Reserveteam stand-by</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  Stuur ons een bericht
                </CardTitle>
                <CardDescription>
                  Alle velden zijn verplicht. Je moet minimaal 18 jaar zijn.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Naam
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Uw volledige naam" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="uw.email@voorbeeld.nl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            Geboortedatum
                          </FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Onderwerp</FormLabel>
                          <FormControl>
                            <Input placeholder="Waar gaat uw bericht over?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bericht</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Beschrijf uw verzoek in detail..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      variant="contact" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Bezig met verzenden..." : "Verstuur bericht"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;